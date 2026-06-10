const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { readJSON, writeJSON, backupJSON } = require('../utils/fileHelper');

const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

async function getPortfolioData() {
  try {
    return await readJSON('portfolio');
  } catch (err) {
    const data = { items: [] };
    await writeJSON('portfolio', data);
    return data;
  }
}

// GET /api/portfolio
router.get('/', async (req, res) => {
  try {
    const data = await getPortfolioData();
    let items = data.items || [];
    
    // Sort by order by default
    items.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Apply category filter
    if (req.query.category) {
      items = items.filter(p => p.category === req.query.category);
    }
    
    // In actual public site, we might filter by status published
    // We'll return everything here and let the client filter if needed, unless status=published is passed
    if (req.query.status) {
      items = items.filter(p => p.status === req.query.status);
    }

    res.json({ success: true, items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/portfolio/:id
router.get('/:id', async (req, res) => {
  try {
    const data = await getPortfolioData();
    const item = (data.items || []).find(p => p.id === req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    res.json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/portfolio
router.post('/', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const { title, category, location, description, images, featuredImage, tags, status } = req.body;
    
    if (!data.items) data.items = [];
    
    const newItem = {
      id: uuidv4(),
      title: title || 'Untitled Project',
      category: category || 'Uncategorized',
      location: location || '',
      description: description || '',
      images: Array.isArray(images) ? images : [],
      featuredImage: featuredImage || '',
      tags: Array.isArray(tags) ? tags : [],
      status: status || 'draft',
      order: data.items.length + 1
    };
    
    data.items.push(newItem);
    
    await backupJSON('portfolio');
    await writeJSON('portfolio', data);
    res.json({ success: true, item: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/portfolio/reorder
router.put('/reorder', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const { ids } = req.body;
    
    if (!Array.isArray(ids)) {
      return res.status(400).json({ success: false, message: "ids array is required" });
    }
    
    if (data.items) {
      data.items.forEach(item => {
        const index = ids.indexOf(item.id);
        if (index !== -1) {
          item.order = index + 1;
        }
      });
      // Sort immediately so file is stored in proper order
      data.items.sort((a, b) => (a.order || 0) - (b.order || 0));
      
      await backupJSON('portfolio');
      await writeJSON('portfolio', data);
    }
    
    res.json({ success: true, items: data.items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/portfolio/:id
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const index = (data.items || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    
    const item = data.items[index];
    data.items[index] = {
      ...item,
      ...req.body,
      id: item.id // Ensure ID cannot be changed
    };
    
    await backupJSON('portfolio');
    await writeJSON('portfolio', data);
    res.json({ success: true, item: data.items[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/portfolio/:id
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const index = (data.items || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    
    data.items.splice(index, 1);
    
    // Reorder remaining items
    data.items.forEach((item, idx) => {
      item.order = idx + 1;
    });
    
    await backupJSON('portfolio');
    await writeJSON('portfolio', data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/portfolio/:id/publish
router.put('/:id/publish', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const index = (data.items || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    
    data.items[index].status = 'published';
    
    await backupJSON('portfolio');
    await writeJSON('portfolio', data);
    res.json({ success: true, item: data.items[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/portfolio/:id/unpublish
router.put('/:id/unpublish', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const index = (data.items || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    
    data.items[index].status = 'draft';
    
    await backupJSON('portfolio');
    await writeJSON('portfolio', data);
    res.json({ success: true, item: data.items[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
