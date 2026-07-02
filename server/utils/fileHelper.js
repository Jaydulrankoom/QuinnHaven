const fs = require('fs-extra');
const path = require('path');
const Database = require('better-sqlite3');

const dataDir = path.join(__dirname, '../../data');
const backupsDir = path.join(dataDir, 'backups');

let db;
let dbInitialized = false;

function getDb() {
  if (!db) {
    db = new Database(path.join(process.cwd(), 'data.db'));
  }
  return db;
}

async function initDB() {
  if (dbInitialized) return;
  try {
    const sqlite = getDb();
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS json_store (
        filename TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    dbInitialized = true;
  } catch (err) {
    console.warn("SQLite initialization failed, falling back to local files:", err.message);
  }
}

async function readJSON(filename) {
  try {
    await initDB();
    if (dbInitialized) {
      const sqlite = getDb();
      const stmt = sqlite.prepare('SELECT data FROM json_store WHERE filename = ?');
      const row = stmt.get(filename);
      if (row) {
        return JSON.parse(row.data);
      }
    }
  } catch (err) {
    console.error(`SQLite read error for ${filename}:`, err.message);
  }
  
  // Fallback to file system
  const filePath = path.join(dataDir, `${filename}.json`);
  if (!(await fs.pathExists(filePath))) {
    throw new Error(`File not found: ${filename}.json`);
  }
  return await fs.readJson(filePath);
}

async function writeJSON(filename, data) {
  const jsonData = JSON.stringify(data, null, 2);
  try {
    await initDB();
    if (dbInitialized) {
      const sqlite = getDb();
      const stmt = sqlite.prepare(
        'INSERT INTO json_store (filename, data) VALUES (?, ?) ON CONFLICT(filename) DO UPDATE SET data = excluded.data, updated_at = CURRENT_TIMESTAMP'
      );
      stmt.run(filename, jsonData);
      return;
    }
  } catch (err) {
    console.error(`SQLite write error for ${filename}:`, err.message);
  }
  
  // Fallback to file system
  const filePath = path.join(dataDir, `${filename}.json`);
  await fs.ensureFile(filePath);
  await fs.writeJson(filePath, data, { spaces: 2 });
}

async function backupJSON(filename) {
  const sourcePath = path.join(dataDir, `${filename}.json`);
  if (await fs.pathExists(sourcePath)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupsDir, `${filename}-${timestamp}.json`);
    await fs.ensureDir(backupsDir);
    await fs.copy(sourcePath, backupPath);
  }
}

module.exports = { readJSON, writeJSON, backupJSON };
