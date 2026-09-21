import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const base = resolve(import.meta.dirname, 'site');
const port = Number(process.env.PORT || 4180);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.webmanifest':'application/manifest+json', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2' };
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
http.createServer(async (req, res) => {
  try {
    if (!['GET','HEAD'].includes(req.method)) {
      res.writeHead(405, { ...securityHeaders, 'Allow':'GET, HEAD', 'Content-Type':'text/plain; charset=utf-8' });
      res.end('Method not allowed');
      return;
    }
    const url = new URL(req.url, 'http://localhost');
    const path = resolve(base, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if (!path.startsWith(base + sep)) { res.writeHead(403, securityHeaders).end(); return; }
    const data = await readFile(path);
    res.writeHead(200, { ...securityHeaders, 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control':'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404, { ...securityHeaders, 'Content-Type':'text/plain; charset=utf-8' }).end('Page not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Lanka One: http://localhost:${port}`));
