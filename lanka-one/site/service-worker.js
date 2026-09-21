const CACHE = 'lanka-one-v2';
const ASSETS = ["./assets/brand.svg","./assets/dm-sans-400.woff2","./assets/dm-sans-500.woff2","./assets/dm-sans-600.woff2","./assets/dm-sans-700.woff2","./assets/dm-sans-LICENSE.txt","./assets/fields.jpg","./assets/home.jpg","./assets/lucide-LICENSE.txt","./assets/lucide.min.js","./assets/market.jpg","./basket.html","./bridge.js","./clarity.html","./data.html","./expenses.html","./grow.html","./index.html","./manifest.webmanifest","./modules/basket.js","./modules/clarity.js","./modules/expenses.js","./modules/grow.js","./modules/ready.js","./ready.html","./shell.js","./styles.css"];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('lanka-one-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) { const copy = response.clone(); event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy))); }
    return response;
  }).catch(async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    if (event.request.mode === 'navigate' && new URL(event.request.url).pathname.endsWith('/')) return caches.match('./index.html');
    return Response.error();
  }));
});
