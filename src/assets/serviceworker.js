self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll("./");
        }
        )
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if(response){
                return response;
            }
            return fetch(e.request);
        }
        )
    );
}
);

self.addEventListener('message', function (e) {
    console.log("push", e.data);
    if (e.data === 'skipWaiting') {
        self.skipWaiting();
    }
});