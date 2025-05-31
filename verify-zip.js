import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import unzipper from 'unzipper';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const zipFile = join(__dirname, 'local-dev-package.zip');
const stream = createReadStream(zipFile)
  .pipe(unzipper.Parse({ forceStream: true }));

console.log('Contents of local-dev-package.zip:');
console.log('----------------------------');

stream.on('entry', (entry) => {
  const { path, type } = entry;
  console.log(`${type === 'Directory' ? 'Directory:' : 'File:    '} ${path}`);
  entry.autodrain();
});

stream.on('error', (err) => {
  console.error('Error reading zip:', err);
});

stream.on('end', () => {
  console.log('----------------------------');
  console.log('Package verification complete');
});
