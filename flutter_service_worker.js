'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c4efc81cc6f94d52d17a56c1cfdc5586",
"assets/AssetManifest.bin.json": "8debfb756bae99497f13dcfd37969483",
"assets/AssetManifest.json": "aefa6fb5c095cd515534dbb7c2d0576f",
"assets/assets/Icon-192.png": "4a11ccdbe4063475bfcb4c04012be601",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dd3f0f44a3a50a2557ecf694e3bc4f60",
"assets/NOTICES": "196e52998996be6ba09e958dbb16cfc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d8e6177021b0bfbce516118a9363abe2",
"firebase-messaging-sw.js": "023607da572cb2cfa696202dbedb57ca",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2985f82bf0763ee39eba713737c3440f",
"icons/Icon-192.png": "4a11ccdbe4063475bfcb4c04012be601",
"icons/Icon-512.png": "14b9482c12f01e4ca6bedb3869baad9e",
"icons/Icon-maskable-192.png": "101a192d81a1fb6cdfa5da1c0dc88e9d",
"icons/Icon-maskable-512.png": "70970dd3ab142ea9348161b7ffc26673",
"index.html": "5e8d328ab978c227b63b9a01a87956c2",
"/": "5e8d328ab978c227b63b9a01a87956c2",
"main.dart.js": "814d08dac5b52ed27ccd3d2431933fa3",
"manifest.json": "96ce51e21fc86f2b4b8ff7059f9faac3",
"naver9d070b39c48cabc7c3d7e50d75b4795e.html": "2549ab1ca0f31dd18906958ad27ffb1b",
"robots.txt": "97e2cfaad6b0d0c9a966adc140a60882",
"seo/community/activity.html": "73c33f0253c0fe28f550b170c58afaa3",
"seo/community/event.html": "32198d66002361cff56ce0694b958364",
"seo/community/food.html": "dff0aaf65adc79bf7bff2ae4866f20f0",
"seo/community/news.html": "67f2e30572da9aa70800953c037105c7",
"seo/community/search.html": "55dfaa80719751f212bf61c2a4ffca6b",
"seo/community/talk.html": "66cbeea68b8d40fe97891655c604974a",
"seo/community/travel.html": "09ed3eb5db4939c5f4896c20e90520ae",
"seo/community.html": "58d6347453e4de791645329b91a7401e",
"seo/contact.html": "f478c7686a33fa55b73bec5fd00a714c",
"seo/index.html": "a7fee78e5d67138ddb50fbb1d211e6a7",
"seo/login.html": "c270ce8157d55fabe7450f001d3a14a1",
"seo/market/buy.html": "dbff5a76c1cef574f091b5615bedac2f",
"seo/market/car.html": "050b4a922bc287c9dbdcfbbaa1670262",
"seo/market/house.html": "255c9461dd747647d47441305ad36017",
"seo/market/job.html": "40988ae812ab1bdc116f9a3176733155",
"seo/market/rent.html": "12fef2d6044581921309da3d9c96e894",
"seo/market/search.html": "e9032430a0b7184d6f83cbc1626c6b75",
"seo/market/sell.html": "8a62e519b01d7c09819cbec0d91dc2f8",
"seo/market.html": "fa1f87631400170a6e8401b670012442",
"seo/privacy.html": "03b7d13cd727225762dd48f2e180bf91",
"seo/register.html": "1cdc2c8d54b8a1ac17c4154bb3a8b344",
"seo/terms.html": "81640e34f51508bb73d033a15821cbb1",
"sitemap.xml": "97db62949ca56b69a1a4e7a6bdad838e",
"version.json": "9e50de3bd61d6f498f61630e29f365fd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
