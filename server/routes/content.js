import express from "express";
const router = express.Router();
import { readJSON, writeJSON, backupJSON } from "../utils/fileHelper.js";

const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

router.use(requireAuth);

// GET /api/content/homepage
router.get('/homepage', async (req, res) => {
  try {
    const data = await readJSON('homepage');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/homepage
router.put('/homepage', async (req, res) => {
  try {
    if (typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ success: false, message: "Body must be an object" });
    }
    await backupJSON('homepage');
    await writeJSON('homepage', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/content/header
router.get('/header', async (req, res) => {
  try {
    const data = await readJSON('header');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/header
router.put('/header', async (req, res) => {
  try {
    await backupJSON('header');
    await writeJSON('header', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/content/footer
router.get('/footer', async (req, res) => {
  try {
    const data = await readJSON('footer');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/footer
router.put('/footer', async (req, res) => {
  try {
    await backupJSON('footer');
    await writeJSON('footer', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/content/services
router.get('/services', async (req, res) => {
  try {
    const data = await readJSON('services');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/services
router.put('/services', async (req, res) => {
  try {
    await backupJSON('services');
    await writeJSON('services', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/services/:id
router.put('/services/:id', async (req, res) => {
  try {
    const data = await readJSON('services');
    const index = data.services.findIndex(s => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    data.services[index] = { ...data.services[index], ...req.body };
    await backupJSON('services');
    await writeJSON('services', data);
    res.json({ success: true, service: data.services[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/content/locations
router.get('/locations', async (req, res) => {
  try {
    const data = await readJSON('locations');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/locations/:id
router.put('/locations/:id', async (req, res) => {
  try {
    const data = await readJSON('locations');
    const index = data.locations.findIndex(l => l.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Location not found" });
    }
    data.locations[index] = { ...data.locations[index], ...req.body };
    await backupJSON('locations');
    await writeJSON('locations', data);
    res.json({ success: true, location: data.locations[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/content/about
router.get('/about', async (req, res) => {
  try {
    let data;
    try {
      data = await readJSON('about');
    } catch(err) {
      // Create default if missing
      data = { headline: "About QuinnHaven", body: "" };
      await writeJSON('about', data);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/content/about
router.put('/about', async (req, res) => {
  try {
    await backupJSON('about');
    await writeJSON('about', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
