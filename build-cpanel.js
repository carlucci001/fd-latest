import { createWriteStream, readdirSync, statSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const output = createWriteStream(join(__dirname, 'cpanel-deploy.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`\nDeployment package created: ${archive.pointer()} total bytes`);
  console.log('\nDeployment Instructions:');
  console.log('1. Log in to your cPanel account');
  console.log('2. Navigate to File Manager');
  console.log('3. Go to public_html directory');
  console.log('4. Upload and extract cpanel-deploy.zip');
  console.log('5. Ensure .htaccess is properly set\n');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add the dist directory contents
const distPath = join(__dirname, 'dist');
archive.directory(distPath, false);

// Add the .htaccess file
archive.file(join(__dirname, 'public', '.htaccess'), { name: '.htaccess' });

archive.finalize();
