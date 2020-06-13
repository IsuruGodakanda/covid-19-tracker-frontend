console.log('⚙️ Hello from Service Worker');

workbox.routing.registerRoute(
  /http:\/\/covid19trackerbackend-env\.eba-5xsmfnhw\.us-west-2\.elasticbeanstalk\.com\/api\/patients\/all/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
