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

// GET /api/settings
router.get('/', async (req, res) => {
  try {
    const data = await readJSON('site-settings');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/settings
router.put('/', async (req, res) => {
  try {
    if (typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ success: false, message: "Body must be an object" });
    }
    await backupJSON('site-settings');
    await writeJSON('site-settings', req.body);
    res.json({ success: true, message: "Settings saved" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
