import { createWriteStream, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const output = createWriteStream(join(__dirname, 'lamp-deploy.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`\nDeployment package created: ${archive.pointer()} total bytes`);
  console.log('\nDeployment Instructions:');
  console.log('1. Upload lamp-deploy.zip to your server');
  console.log('2. Extract to your public_html directory');
  console.log('3. Ensure PHP and Apache configurations are set correctly');
  console.log('4. Your site should now be live!\n');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add the dist directory contents
const distPath = join(__dirname, 'dist');
archive.directory(distPath, false);

// Add the PHP files
archive.file(join(__dirname, 'public', 'send-mail.php'), { name: 'send-mail.php' });

// Add the .htaccess file
archive.file(join(__dirname, 'public', '.htaccess'), { name: '.htaccess' });

archive.finalize();
