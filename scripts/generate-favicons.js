import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

// The Nuviya logo SVG
const svgContent = `
<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="20" fill="#030105"/>
  <line x1="25" y1="25" x2="25" y2="75" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <line x1="75" y1="25" x2="75" y2="75" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <line x1="25" y1="75" x2="75" y2="25" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <line x1="25" y1="25" x2="75" y2="75" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <circle cx="25" cy="25" r="8" fill="white"/>
  <circle cx="25" cy="75" r="8" fill="white"/>
  <circle cx="75" cy="25" r="8" fill="white"/>
  <circle cx="75" cy="75" r="8" fill="white"/>
</svg>
`;

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const { name, size } of sizes) {
    await page.setViewport({ width: size, height: size });

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; }
            body { width: ${size}px; height: ${size}px; }
            svg { width: 100%; height: 100%; }
          </style>
        </head>
        <body>${svgContent}</body>
      </html>
    `;

    await page.setContent(html);
    await page.screenshot({
      path: path.join(publicDir, name),
      type: 'png',
      omitBackground: false,
    });

    console.log(`Generated ${name}`);
  }

  await browser.close();
  console.log('All favicons generated!');
}

generateFavicons().catch(console.error);
