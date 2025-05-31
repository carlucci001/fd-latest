import { createWriteStream, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const output = createWriteStream(join(__dirname, 'local-dev-package.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`\nExport package created: ${archive.pointer()} total bytes`);
  console.log('\nBolt.DIY Import Instructions:');
  console.log('1. Extract local-dev-package.zip');
  console.log('2. Import the extracted folder into Bolt.DIY');
  console.log('3. The project will be ready to run\n');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Function to recursively add directory contents to zip
const addDirectoryToArchive = (dirPath, zipPath = '') => {
  const files = readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = join(dirPath, file);
    const stat = statSync(filePath);
    const entryPath = join(zipPath, file);

    if (stat.isDirectory()) {
      addDirectoryToArchive(filePath, entryPath);
    } else {
      archive.file(filePath, { name: entryPath });
    }
  });
};

// Add source files
const sourceFiles = [
  'src',
  'public',
  'index.html',
  'package.json',
  'tsconfig.json',
  'tsconfig.node.json',
  'tsconfig.app.json',
  'vite.config.ts',
  'tailwind.config.js',
  'postcss.config.js',
  '.gitignore',
  'README.md'
];

sourceFiles.forEach(file => {
  const filePath = join(__dirname, file);
  try {
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      archive.directory(filePath, file);
    } else {
      archive.file(filePath, { name: file });
    }
  } catch (err) {
    console.warn(`Warning: ${file} not found, skipping...`);
  }
});

archive.finalize();
