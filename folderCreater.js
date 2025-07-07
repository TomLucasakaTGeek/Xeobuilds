import fs from 'fs';
import path from 'path';

/**
 * Creates a folder in the current working directory.
 * @param {string} folderName - The name of the folder to create.
 */

export const createFolder = (folderName) => {
  const folderPath = path.join(process.cwd(), folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 Folder created: ${folderName}`);
  } else {
    console.log(`📂 Folder already exists: ${folderName}`);
  }
};

