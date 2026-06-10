require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs-extra');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'quinnhaven_secret_2025',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/login.html');
  }
};

// Static folders
app.use('/', express.static(path.join(__dirname, '../admin')));
app.use('/uploads', express.static(path.join(__dirname, '../admin/uploads')));
app.use('/site', express.static(path.join(__dirname, '../')));

// Default route
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Load routes with try/catch to prevent missing file crashes
try {
  const authRoutes = require('./routes/auth');
  app.use('/api/auth', authRoutes);
} catch (error) {
  console.log('Skipping /api/auth - route not created yet');
}

try {
  const contentRoutes = require('./routes/content');
  app.use('/api/content', contentRoutes);
} catch (error) {
  console.log('Skipping /api/content - route not created yet');
}

try {
  const blogRoutes = require('./routes/blog');
  app.use('/api/blog', blogRoutes);
} catch (error) {
  console.log('Skipping /api/blog - route not created yet');
}

try {
  const portfolioRoutes = require('./routes/portfolio');
  app.use('/api/portfolio', portfolioRoutes);
} catch (error) {
  console.log('Skipping /api/portfolio - route not created yet');
}

try {
  const mediaRoutes = require('./routes/media');
  app.use('/api/media', mediaRoutes);
} catch (error) {
  console.log('Skipping /api/media - route not created yet');
}

try {
  const settingsRoutes = require('./routes/settings');
  app.use('/api/settings', settingsRoutes);
} catch (error) {
  console.log('Skipping /api/settings - route not created yet');
}

try {
  const menuRoutes = require('./routes/menu');
  app.use('/api/menu', menuRoutes);
} catch (error) {
  console.log('Skipping /api/menu - route not created yet');
}

try {
  const pagesRoutes = require('./routes/pages');
  app.use('/api/pages', pagesRoutes);
} catch (error) {
  console.log('Skipping /api/pages - route not created yet');
}

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`QuinnHaven Admin running at http://localhost:${PORT}`);
});
