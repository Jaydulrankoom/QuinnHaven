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

async function getBlogData() {
  try {
    return await readJSON('blog-posts');
  } catch (err) {
    // If file doesn't exist, return default initialized structure
    const data = { posts: [], categories: [] };
    await writeJSON('blog-posts', data);
    return data;
  }
}

// Slug generator
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, '')
    .trim()
    .replace(/\\s+/g, '-')
    .substring(0, 60)
    .replace(/-+$/, '');
}

// GET /api/blog
router.get('/', async (req, res) => {
  try {
    const data = await getBlogData();
    let posts = data.posts || [];
    
    // Apply filters
    if (req.query.status) {
      posts = posts.filter(p => p.status === req.query.status);
    }
    if (req.query.category) {
      posts = posts.filter(p => p.category === req.query.category);
    }
    if (req.query.search) {
      const search = req.query.search.toLowerCase();
      posts = posts.filter(p => 
        (p.title && p.title.toLowerCase().includes(search)) || 
        (p.content && p.content.toLowerCase().includes(search))
      );
    }
    
    // Sort by date descending
    posts.sort((a, b) => new Date(b.publishDate || b.lastModified) - new Date(a.publishDate || a.lastModified));

    // Apply limit
    if (req.query.limit) {
      posts = posts.slice(0, parseInt(req.query.limit, 10));
    }
    
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/blog/count
router.get('/count', async (req, res) => {
  try {
    const data = await getBlogData();
    const posts = data.posts || [];
    const published = posts.filter(p => p.status === 'published').length;
    const drafts = posts.filter(p => p.status === 'draft').length;
    
    res.json({
      success: true,
      total: posts.length,
      published,
      drafts
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/blog/categories/list
router.get('/categories/list', async (req, res) => {
  try {
    const data = await getBlogData();
    const posts = data.posts || [];
    const usedCategories = [...new Set(posts.map(p => p.category).filter(Boolean))];
    const allCategories = [...new Set([...(data.categories || []), ...usedCategories])];
    
    res.json({ success: true, categories: allCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/blog/slug/:slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const data = await getBlogData();
    const post = (data.posts || []).find(p => p.slug === req.params.slug);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/blog/:id
router.get('/:id', async (req, res) => {
  try {
    const data = await getBlogData();
    const post = (data.posts || []).find(p => p.id === req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/blog
router.post('/', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const { title, content, category, tags, excerpt, featuredImage, status, metaTitle, metaDescription } = req.body;
    
    const today = new Date().toISOString().split('T')[0];
    const label = title || 'Untitled';
    
    const newPost = {
      id: uuidv4(),
      title: label,
      slug: generateSlug(label),
      content: content || '',
      category: category || 'Uncategorized',
      tags: Array.isArray(tags) ? tags : [],
      excerpt: excerpt || '',
      featuredImage: featuredImage || '',
      status: status || 'draft',
      metaTitle: metaTitle || '',
      metaDescription: metaDescription || '',
      author: "QuinnHaven Design Team",
      publishDate: today,
      lastModified: today
    };
    
    if (!data.posts) data.posts = [];
    data.posts.push(newPost);
    
    await backupJSON('blog-posts');
    await writeJSON('blog-posts', data);
    res.json({ success: true, post: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/blog/:id
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const index = (data.posts || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    const post = data.posts[index];
    const today = new Date().toISOString().split('T')[0];
    
    data.posts[index] = {
      ...post,
      ...req.body,
      id: post.id,
      lastModified: today
    };
    
    await backupJSON('blog-posts');
    await writeJSON('blog-posts', data);
    res.json({ success: true, post: data.posts[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/blog/:id
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const index = (data.posts || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    data.posts.splice(index, 1);
    
    await backupJSON('blog-posts');
    await writeJSON('blog-posts', data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/blog/:id/publish
router.put('/:id/publish', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const index = (data.posts || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    const today = new Date().toISOString().split('T')[0];
    data.posts[index].status = 'published';
    data.posts[index].publishDate = today;
    data.posts[index].lastModified = today;
    
    await backupJSON('blog-posts');
    await writeJSON('blog-posts', data);
    res.json({ success: true, post: data.posts[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/blog/:id/unpublish
router.put('/:id/unpublish', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const index = (data.posts || []).findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    const today = new Date().toISOString().split('T')[0];
    data.posts[index].status = 'draft';
    data.posts[index].lastModified = today;
    
    await backupJSON('blog-posts');
    await writeJSON('blog-posts', data);
    res.json({ success: true, post: data.posts[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/blog/categories
router.post('/categories', requireAuth, async (req, res) => {
  try {
    const data = await getBlogData();
    const { category } = req.body;
    
    if (!category) {
      return res.status(400).json({ success: false, message: "Category is required" });
    }
    
    if (!data.categories) data.categories = [];
    
    if (!data.categories.includes(category)) {
      data.categories.push(category);
      await backupJSON('blog-posts');
      await writeJSON('blog-posts', data);
    }
    
    res.json({ success: true, categories: data.categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
