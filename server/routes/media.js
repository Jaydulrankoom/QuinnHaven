import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import fs from "fs-extra";

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.ensureDir(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Sanitize filename spaces to hyphens
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    const timestamp = Date.now();
    cb(null, `${timestamp}-${basename}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, GIF, WEBP, and SVG are allowed.'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: fileFilter
});

// POST /api/media/upload
router.post('/upload', requireAuth, (req, res) => {
  upload.any()(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ success: false, message: err.message });
    } else if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' });
    }
    
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      url: `/uploads/${file.filename}`,
      originalName: file.originalname,
      size: file.size,
      uploadDate: new Date().toISOString()
    }));
    
    // Return array per specification
    res.json(uploadedFiles);
  });
});

// GET /api/media/library
router.get('/library', requireAuth, async (req, res) => {
  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.ensureDir(uploadDir);
    const files = await fs.readdir(uploadDir);
    
    let imageFiles = [];
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        const stats = await fs.stat(path.join(uploadDir, file));
        imageFiles.push({
          filename: file,
          url: `/uploads/${file}`,
          size: stats.size,
          uploadDate: stats.birthtime || stats.mtime
        });
      }
    }
    
    // Sort by uploadDate desc
    imageFiles.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    
    res.json(imageFiles); // Return as array per prompt specification
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/media/:filename
router.delete('/:filename', requireAuth, async (req, res) => {
  try {
    const filename = req.params.filename;
    
    // Security check to prevent directory traversal
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return res.status(403).json({ success: false, message: 'Invalid filename' });
    }
    
    const filePath = path.join(process.cwd(), 'public/uploads', filename);
    
    if (await fs.pathExists(filePath)) {
      await fs.remove(filePath);
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'File not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/media/count
router.get('/count', requireAuth, async (req, res) => {
  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.ensureDir(uploadDir);
    const files = await fs.readdir(uploadDir);
    
    // Filter only image files for accurate count
    const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i));
    res.json({ total: imageFiles.length });
  } catch (error) {
    // If directory doesn't exist, count is 0
    res.json({ total: 0 });
  }
});

export default router;
