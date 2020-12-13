// Website Given Name: Budget Tracker
const APP_PREFIX = 'BudgetTracker'; 
// Website Verion_01
const VERSION = 'version_01';
// Constants for CACHE_NAME && FILES_TO_CACHE: `Sending specific files to cache on load`
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "./js/idb.js",
    "./js/index.js",
    "./css/styles.css",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./icons/icon-128x128.png",
    "./icons/icon-144x144.png",
    "./icons/icon-152x152.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png"
];

// To install the service worker and begin the CACHE operation
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  self.skipWaiting();
})

// Activate the service worker and remove old data from the cache
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      let cacheKeeplist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // To add the current CACHE_NAME to the `keeplist`
      cacheKeeplist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function(key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
  self.clients.claim()
});

// Intercept fetch requests
self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {
            return request || fetch(e.request)
        })
    )
})