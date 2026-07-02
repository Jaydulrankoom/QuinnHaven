import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
import { readJSON, writeJSON, backupJSON } from "../utils/fileHelper.js";

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
    const item = data.items.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/portfolio
router.post('/', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    const { title, category, location, status, content, imageUrl } = req.body;
    const id = uuidv4();
    const createdAt = Date.now();
    
    const newItem = {
      id, title, category, location, status, content, imageUrl, created_at: createdAt
    };
    
    data.items.push(newItem);
    await writeJSON('portfolio', data);
    
    res.json({ success: true, item: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/portfolio/:id
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const data = await getPortfolioData();
    data.items = data.items.filter(i => i.id !== req.params.id);
    await writeJSON('portfolio', data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
