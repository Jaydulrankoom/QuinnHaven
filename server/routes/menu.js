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

router.use(requireAuth);

// GET /api/menu
router.get('/', async (req, res) => {
  try {
    const data = await readJSON('navigation');
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/menu
router.put('/', async (req, res) => {
  try {
    await backupJSON('navigation');
    await writeJSON('navigation', req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/menu/item
router.post('/item', async (req, res) => {
  try {
    const { label, url, parentId } = req.body;
    const data = await readJSON('navigation');
    
    const newItem = {
      id: uuidv4(),
      label: label || "New Item",
      url: url || "#",
      children: []
    };

    if (parentId) {
      const parent = data.mainMenu.find(item => item.id === parentId);
      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(newItem);
      } else {
        return res.status(404).json({ success: false, message: "Parent not found" });
      }
    } else {
      data.mainMenu.push(newItem);
    }

    await backupJSON('navigation');
    await writeJSON('navigation', data);
    res.json({ success: true, item: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/menu/item/:id
router.delete('/item/:id', async (req, res) => {
  try {
    const idToDelete = req.params.id;
    const data = await readJSON('navigation');
    let itemFound = false;

    data.mainMenu = data.mainMenu.filter(item => {
      if (item.id === idToDelete) {
        itemFound = true;
        return false;
      }
      if (item.children && Array.isArray(item.children)) {
        const initialLen = item.children.length;
        item.children = item.children.filter(child => child.id !== idToDelete);
        if (item.children.length !== initialLen) {
          itemFound = true;
        }
      }
      return true;
    });

    if (itemFound) {
      await backupJSON('navigation');
      await writeJSON('navigation', data);
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/menu/reorder
router.put('/reorder', async (req, res) => {
  try {
    const { order } = req.body; // array of ids
    if (!Array.isArray(order)) {
      return res.status(400).json({ success: false, message: "order must be an array of ids" });
    }
    
    const data = await readJSON('navigation');
    
    // Create a new ordered array
    const orderedMenu = [];
    order.forEach(id => {
      const itemIndex = data.mainMenu.findIndex(item => item.id === id);
      if (itemIndex > -1) {
        orderedMenu.push(data.mainMenu[itemIndex]);
      }
    });

    // Add any remaining items that were not in the order array
    data.mainMenu.forEach(item => {
      if (!order.includes(item.id)) {
        orderedMenu.push(item);
      }
    });

    data.mainMenu = orderedMenu;
    
    await backupJSON('navigation');
    await writeJSON('navigation', data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
