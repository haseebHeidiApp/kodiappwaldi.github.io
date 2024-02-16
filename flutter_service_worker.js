'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8bb435ab703d3f4c95de4c685e510c27",
"index.html": "ecd07918aa3338c4448e6d3cf123020b",
"/": "ecd07918aa3338c4448e6d3cf123020b",
"css/style.css": "aa8ee14783a29f6febe025d4d9bd7bf0",
"css/style-old.css": "d1e5df9de01089cf98513341298876d3",
"js/demo-css-fx.js": "f423e0beaf767570462f9b065aa1b68a",
"js/demo-js-interop.js": "71141ae1f328ae1c7ec379b7b7cd9ecd",
"main.dart.js": "7bfebc93f0d417d4397157c90a024403",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/bg-mob.png": "6e619e9ffb4a86f7d2b86b328626b311",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "455a6ea757df715f58e7d1aade34715d",
"fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"fonts/OFL.txt": "7b54e58aafd08ccbd0b01eb679b98df7",
"assets/AssetManifest.json": "5bdd15947475c870ec1b7761a19e7d92",
"assets/NOTICES": "ec1bd0b2102e97b416e7ceb1b6055397",
"assets/FontManifest.json": "525ed37092fd68b78c06d4e08030d42e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "82a6c110601f0a8ea41cd8723f9ed7fe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8d829af8130447be281ebddc29bb3801",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9dc4e491a2a4ecb2d2d138ca896ca7f0",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "26fd85535ad335759d2e02983eccafbc",
"assets/fonts/MaterialIcons-Regular.otf": "04904f62ee644af70007380b098800c0",
"assets/assets/locale/zh.json": "29266e5eeb461b15ac149865956a7e08",
"assets/assets/locale/tr.json": "b8df49b6016ad1cebe8b4d1fd59a7510",
"assets/assets/locale/nl.json": "01186a721268f561ab5a4d1e2a0ce53c",
"assets/assets/locale/ja.json": "49bfbe8c69fd48675e6432dd55cfe1fe",
"assets/assets/locale/de.json": "56f48436c06fc1a20ef39edacaf5b0a2",
"assets/assets/locale/ru.json": "afb0238397651e24f14531584a3e311a",
"assets/assets/locale/pt.json": "416e7035e72c091bb540e0af86bee8b2",
"assets/assets/locale/en.json": "c000b871099f95f0a42ab83aed36a3c3",
"assets/assets/locale/km.json": "d3d71ff26cc950cbc90dbf9e9e408fce",
"assets/assets/locale/fr.json": "8c09a473c1efaa9c898c73d4494a3a50",
"assets/assets/locale/el.json": "537d10f2bdb93f7fdd9836dfb726132c",
"assets/assets/locale/hi.json": "457c00dd9fbe7204d26fd0081eda6eeb",
"assets/assets/locale/ko.json": "ad689def034d9187d68dff112d56e99e",
"assets/assets/locale/he.json": "d097bd387da1d2af48c6523a8e2d93ea",
"assets/assets/locale/vi.json": "9d1de8b55e1b27c0720044407bc44cd1",
"assets/assets/locale/fa.json": "e9cc28ebf6b31bc4b02ea3fc006b19b4",
"assets/assets/locale/lo.json": "87500fe8c580dce700d8b93937a3d30f",
"assets/assets/locale/id.json": "a2d8f35505e520dc48ff32a8aee49c86",
"assets/assets/locale/da.json": "49417de550653f4e4a5b6588751120ad",
"assets/assets/locale/es.json": "8cec07e35f972d590824f91f3ba2b4dd",
"assets/assets/locale/ar.json": "504ef4614b05b3eef611fedf92d8b044",
"assets/assets/images/slider.jpeg": "98c5ef192efdf220bfef03c4270d8e07",
"assets/assets/images/services-14.png": "049d7bb19205a1c50ff6c82e96b80583",
"assets/assets/images/services-12.png": "c0435aed3ba1adc570cb5e77ecc22650",
"assets/assets/images/services-13.png": "0d778f9d6852a12775c9af195fed8ab9",
"assets/assets/images/services-9.png": "9aca219eed7a93ae7ad5d55ddb3defdf",
"assets/assets/images/services-11.png": "099a7d90b37a9b7ddd7aa720cc041acc",
"assets/assets/images/services-10.png": "e0ebaf6ac2ae83494096929c7a70f262",
"assets/assets/images/services-8.png": "eb17f69bd6454d487d9c1486394db299",
"assets/assets/images/services-5.png": "33eb407abc18a4f2b465021b16c3f21f",
"assets/assets/images/services-4.png": "67f24a01b6674a763437a27af22fd95c",
"assets/assets/images/services-6.png": "4da63272fd636b8099a69a741429979a",
"assets/assets/images/services-7.png": "1ce343b503be6486a587345586d20760",
"assets/assets/images/logo.png": "15155d1706bcb26498ff89a6cb646a27",
"assets/assets/images/services-3.png": "9c8e3e0190e7172b5fc5ad50115f3b8e",
"assets/assets/images/services-2.png": "f9be53f9bc6d790f2513e33718f42c52",
"assets/assets/images/services-1.png": "836a418ab7500fa69dfd3383a887742f",
"assets/assets/images/slide.png": "0c67107c68155bccd0cd5b25f8203f44",
"assets/assets/images/loading.png": "9bd10822103b2a5ef8d7431420e98347",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Merriweather-Bold.ttf": "9ccb885c9cf8e503d557f15e0b2cbf24",
"assets/assets/fonts/Raleway-BoldItalic.ttf": "400d6e7c7df487961a0f1426a73fff68",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Raleway-MediumItalic.ttf": "d3aded9f5da961c952a9c6c41d77f681",
"assets/assets/fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/assets/fonts/ProximaNovaT-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Raleway-ThinItalic.ttf": "b4fdd9b19ccaa454c97e1ba2b1364815",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"assets/assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0",
"assets/assets/fonts/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-Extrabld.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "be3bf63a30b4523ae221bd4358b13e8f",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/assets/fonts/Raleway-ExtraBoldItalic.ttf": "05c7000a5498523bbd184902d124c382",
"assets/assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/fonts/Raleway-ExtraLightItalic.ttf": "c8c27816a4b4b6fdfd4a8c944bd2c8ff",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Merriweather-BoldItalic.ttf": "63e1f06ea6bf31c8f3143c143e7e6c2a",
"assets/assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/assets/fonts/Raleway-SemiBoldItalic.ttf": "b8ea2e82df9aeaf774c081dffb3b46e8",
"assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/Merriweather-BlackItalic.ttf": "2282b0c9c8dea275e854273c968b20d7",
"assets/assets/fonts/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/assets/fonts/Raleway-BlackItalic.ttf": "956d40aa9747deb39f8b93793803bc9d",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/assets/fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/ProximaNova-Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/assets/fonts/Raleway-LightItalic.ttf": "e2a70086178378a6165ad7b032ee1077",
"assets/assets/fonts/OpenSans-ExtraBoldItalic.ttf": "37f52104364c2eb5482fd85777bda0ac",
"assets/assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/assets/fonts/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Merriweather-Italic.ttf": "498bf4ee4ac9fab22ad9f814839173b2",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Merriweather-Black.ttf": "bfc959a1d3a785caff07d85f82f3e513",
"assets/assets/fonts/Merriweather-LightItalic.ttf": "4deed44b6913721447f062c9fa8caac6",
"assets/assets/data/locations.json": "ea530d7bef2472349ef69c85ef715aba",
"assets/assets/data/recent_listings.json": "20fb121d4239c68fa854dad02965759b",
"assets/assets/data/recent_listings1.json": "87dc38eae7fca944beaaf4c71c72e703",
"assets/assets/data/category.json": "c008c8d0183955bc2abe0d4a108021e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
