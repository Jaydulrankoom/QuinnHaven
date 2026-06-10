const fs = require('fs-extra');
const path = require('path');

const dataDir = path.join(__dirname, '../../data');
const backupsDir = path.join(dataDir, 'backups');

async function readJSON(filename) {
  const filePath = path.join(dataDir, `${filename}.json`);
  if (!(await fs.pathExists(filePath))) {
    throw new Error(`File not found: ${filename}.json`);
  }
  return await fs.readJson(filePath);
}

async function writeJSON(filename, data) {
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
