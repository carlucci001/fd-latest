import { createServer } from 'http';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer((req, res) => {
  if (req.url === '/download') {
    const file = join(__dirname, 'lamp-deploy.zip');
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=lamp-deploy.zip');
    createReadStream(file).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Download LAMP Deploy Package</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 20px;
              text-align: center;
            }
            h1 { color: #0B4D83; }
            .download-btn {
              display: inline-block;
              background: #2AB573;
              color: white;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration: none;
              margin-top: 20px;
              transition: background 0.3s ease;
            }
            .download-btn:hover {
              background: #22915C;
            }
          </style>
        </head>
        <body>
          <h1>Download LAMP Deploy Package</h1>
          <p>Click the button below to download the deployment package for your LAMP server.</p>
          <a href="/download" class="download-btn">Download lamp-deploy.zip</a>
        </body>
      </html>
    `);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
