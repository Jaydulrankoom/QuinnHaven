const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { readJSON, writeJSON } = require('../utils/fileHelper');

// Middleware for auth routes that require the user to be logged in
const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

// Auto-hash password on first server start if still using the placeholder
const initAuth = async () => {
  try {
    const data = await readJSON('admins');
    if (data && data.users && data.users[0] && (data.users[0].password === "$2a$10$exampleHashedPasswordHere" || data.users[0].password === "setup_new_password")) {
      const hashedPassword = await bcrypt.hash("Quin$", 10);
      data.users[0].password = hashedPassword;
      await writeJSON('admins', data);
      console.log("Admin password was auto-hashed from .env");
    }
  } catch (error) {
    console.error("Error initializing auth:", error);
  }
};

initAuth();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  console.log("Login attempt for:", req.body.username);
  console.log("Login - req.secure:", req.secure);
  try {
    const { username, password } = req.body;
    let data;
    try {
      data = await readJSON('admins');
    } catch (err) {
      data = { users: [{ id: 1, username: "admin", password: "setup_new_password", name: "Admin", role: "admin" }] };
    }
    const user = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      req.session.user = { 
        id: user.id, 
        username: user.username, 
        name: user.name, 
        role: user.role 
      };
      return res.json({ success: true, user: { name: user.name, role: user.role } });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  req.session = null;
  res.clearCookie('session');
  return res.json({ success: true });
});

// GET /api/auth/check
router.get('/check', (req, res) => {
  console.log("Check auth - req.secure:", req.secure);
  console.log("Check auth - session:", req.session ? req.session.id : 'no session');
  console.log("Check auth - user:", req.session ? req.session.user : 'no user');
  if (req.session && req.session.user) {
    return res.json({ loggedIn: true, user: req.session.user });
  } else {
    return res.json({ loggedIn: false });
  }
});

// POST /api/auth/change-password
router.post('/change-password', requireAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const data = await fs.readJson(dataPath);
    const userIndex = data.users.findIndex(u => u.username === req.session.user.username);
    
    if (userIndex === -1) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isValid = await bcrypt.compare(currentPassword, data.users[userIndex].password);
    if (!isValid) {
      return res.status(401).json({ success: false, message: "Invalid current password" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    data.users[userIndex].password = hashedNewPassword;
    
    await fs.writeJson(dataPath, data, { spaces: 2 });
    return res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST /api/auth/setup
router.post('/setup', async (req, res) => {
  try {
    const { newPassword } = req.body;
    const data = await fs.readJson(dataPath);
    
    // Allow setup only if the password is still the explicit example hash
    if (data.users && data.users[0] && data.users[0].password === "$2a$10$exampleHashedPasswordHere") {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      data.users[0].password = hashedPassword;
      await fs.writeJson(dataPath, data, { spaces: 2 });
      return res.json({ success: true, message: "Initial password setup successful" });
    } else {
      return res.status(403).json({ success: false, message: "Setup already completed or generic forbidden" });
    }
  } catch (error) {
    console.error("Setup error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
