var cacheName = 'hello-pwa';
var filesToCache = [
  '.',
  'index.html',
  'js/main.js',
  'app1.js',
  'css/style.css',
  'css/media.css',
  'app2.js',
  'app3.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
