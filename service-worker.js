'use strict';
let version = 'v1::';

self.addEventListener("install", function(event) {
    console.log('WORKER: install event in progress.');
    event.waitUntil(
        /* The caches built-in is a promise-based API that helps you cache responses,
           as well as finding and deleting them.
        */
        caches
            /* You can open a cache by name, and this method returns a promise. We use
               a versioned cache name here so that we can remove old cache entries in
               one fell swoop later, when phasing out an older service worker.
            */
            .open(version + 'fundamentals')
            .then(function(cache) {
                /* After the cache is opened, we can fill it with the offline fundamentals.
                   The method below will add all resources we've indicated to the cache,
                   after making HTTP requests for each of them.
                */
                return cache.addAll([
                    '/~vib20137/MobileAppDevelopment/index.html',
                    '/~vib20137/MobileAppDevelopment/style.css',
                    '/~vib20137/MobileAppDevelopment/normalize.css',
                    '/~vib20137/MobileAppDevelopment/index.js'
                ]);
            })
            .then(function() {

                console.log('WORKER: install completed');
            })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then((cached) => {
            const networked = fetch(event.request)
                .then(fetchedFromNetwork, unableToResolve)
                .catch(unableToResolve);

            console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
            return cached || networked;

            function fetchedFromNetwork(response) {
                const cacheCopy = response.clone();

                return response;
            }

            function unableToResolve() {

                console.log('WORKER: fetch request failed in both cache and network.');
                return new Response('<h1>Service Unavailable</h1>', {
                    status: 503, statusText: 'Service Unavailable',
                    headers: new Headers({'Content-Type': 'text/html'})
                });
            }
        })
    );
});

