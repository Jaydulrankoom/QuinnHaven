const fs = require('fs-extra');
const path = require('path');
const mysql = require('mysql2/promise');

const dataDir = path.join(__dirname, '../../data');
const backupsDir = path.join(dataDir, 'backups');

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'u328954550_Quin',
  password: process.env.DB_PASSWORD || 'Quinhaven12$',
  database: process.env.DB_NAME || 'u328954550_Quin'
};

let pool;
function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

let dbInitialized = false;
async function initDB() {
  if (dbInitialized) return;
  try {
    const p = getPool();
    await p.query(`
      CREATE TABLE IF NOT EXISTS json_store (
        filename VARCHAR(255) PRIMARY KEY,
        data LONGTEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    dbInitialized = true;
  } catch (err) {
    console.warn("MySQL initialization failed, falling back to local files:", err.message);
  }
}

async function readJSON(filename) {
  try {
    await initDB();
    if (dbInitialized) {
      const p = getPool();
      const [rows] = await p.query('SELECT data FROM json_store WHERE filename = ?', [filename]);
      if (rows.length > 0) {
        return JSON.parse(rows[0].data);
      }
    }
  } catch (err) {
    console.error(`MySQL read error for ${filename}:`, err.message);
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
      const p = getPool();
      await p.query(
        'INSERT INTO json_store (filename, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = ?',
        [filename, jsonData, jsonData]
      );
      return;
    }
  } catch (err) {
    console.error(`MySQL write error for ${filename}:`, err.message);
  }
  
  // Fallback to file system
  const filePath = path.join(dataDir, `${filename}.json`);
  await fs.ensureFile(filePath);
  await fs.writeJson(filePath, data, { spaces: 2 });
}

async function backupJSON(filename) {
  // We can skip backup for MySQL or just backup local files as well
  const sourcePath = path.join(dataDir, `${filename}.json`);
  if (await fs.pathExists(sourcePath)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupsDir, `${filename}-${timestamp}.json`);
    await fs.ensureDir(backupsDir);
    await fs.copy(sourcePath, backupPath);
  }
}

module.exports = { readJSON, writeJSON, backupJSON };
