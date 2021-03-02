importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
importScripts("https://ivanshavliuga.github.io/shulte2/precache-manifest.38f62ea1894762ef1a6ed02dffd06ebd.js");
workbox.core.setCacheNameDetails({prefix: "iv2shulte"});
workbox.skipWaiting();
workbox.clientsClaim();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
