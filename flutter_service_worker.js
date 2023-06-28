'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "96fee9eee80fd0bbf8507950530d3629",
".git/config": "3795a7f0f672d6388eb5502010f8d1fa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b95bea68729e000606bd22fd2e5cea15",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "240feab635cc5417601e75d9beb0337a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c3b0d4c61b422e9c95788dd48bfb286",
".git/logs/refs/heads/main": "2c3b0d4c61b422e9c95788dd48bfb286",
".git/logs/refs/remotes/origin/HEAD": "6488eb39b77ba29b5e87f24f80a8de56",
".git/logs/refs/remotes/origin/main": "b40874e6f912f6f631b2574e10291718",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/4e1fe099cb9cbc140c22e2e3eee00b36d67fe6": "8914b32f678dabbe1197bc40d289f7d1",
".git/objects/09/38afa3691c91d67153ee9f4c5336fb27befee8": "a0e69eb7024712b361c282f53b134580",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/16/d3eaad9212952120dbb32121f59cf800ba76dd": "254bca89261fcd2622bf4443910cb458",
".git/objects/18/db6197f1247c319b0142af39eaf11bf1c1ff0e": "3c343a7ea29989ee18027cca2f5aaa76",
".git/objects/19/becc042dd90dc6778f89814ac7069de41cee3a": "913c5e251b705cc5ac5d6860a6a0a466",
".git/objects/1a/d628eca839268420d1ccc7dc78a9de3ad47f7c": "d243d94f00cad92c7f5f149718081dff",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2b/dda78ccdf1c509112d823eb4eb9a6b8d1207fa": "b213e891fc9be354d49ea9c9879ce47a",
".git/objects/35/4cdeda0d940c93d3cc6da48375740b12a49e4e": "192164e7c940fdb47d50ad097c4a28c8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/6533494c53f42017b1dcfc25a3f74f18879d0f": "b97cb2f6536d2da5398a74c453908eef",
".git/objects/3b/78536d5966c640f635ace45062d40840861c54": "08ee6e8f7852ced2ec89a542ca9eb60e",
".git/objects/3c/d474ab126d5855ff817824fa424e2e92fa8a0f": "d1be9364cbbc48b676a667ea55014730",
".git/objects/3e/d4e224d0d3a1fc3724a248b23bec8e62d84bf7": "dd785c68b31456c6085a762f70381042",
".git/objects/42/c6a3675cfbeae842afe3c247dfd0408eff6281": "25757abdc6326bc66c496976cd93b15d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/7850e0c47cb5ed419884aaad002a3dded98c2e": "1671b0675eea1263f1ae977bb99ce4ae",
".git/objects/5d/1a81b53ee2182fbcaad57492d3c6e51eaac28c": "215098e580150fda124d86dbe7d09ab5",
".git/objects/5e/ee232828041b753530b59c683e4613a87d99ae": "f8e80d9ee808042727f9c922d9f02051",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/2fd58059a57b1bab9852660ee49085891726a7": "a43987cdf8399e6d282538f36c71f936",
".git/objects/64/56576fb6394f06d729844e0782254a8a107f63": "112b994da08379223276cb887abc84b9",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/f80c8b364633e8efed8147c16e5d1fc1ce90f9": "6542a8604e76a0242a91b9cbd2f1e647",
".git/objects/7b/8a51ddf240c072422fc520f6ff21fa85a62d68": "87d2393a5682e3cc66fd84e7f50d10a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7887e6c43614e3a0ff8878046b2d447fb9c9ba": "16c2bfd51b20c952b877f2f5d499ef9c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a7/2e7d6393995fe4d302cf13a7a6041fcd43ed4d": "01ae32fda0454e19e7c6f743fc4526ea",
".git/objects/a9/3713d898809f2e2a6ef820c828ce441c0a52c0": "3efdf2d0e0f1e0a3cf40a09306278a04",
".git/objects/a9/a97a792ed025f963af6189351cfc17bed7f244": "75566edb01cb78232d8a1122956e75d6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/30fa8c92143e6e470b9fc70b1b509f54bed4bb": "e3af712ff9d7ec1afc648dd63f15ef01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/9de4fbff7d03413c972bc90c552d99d2ce2fb0": "00ec0e212e50a0d72895f622ca148648",
".git/objects/df/e0cd449c44db48fc83b3c02100d6a6632f338b": "4c9a1996d0c1f6a32a9a6c98a9408bbc",
".git/objects/e1/0d932d2d2f4de3d0a5aa93acdc407e33de2434": "c75e044308e0169f56048210508cd7eb",
".git/objects/e5/6e75968fa8566397913762d43c6e3cf6480538": "7056887158cbc391057a5beebe7abf38",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6de27b5ee38cd98330def9ba2b648b5c32260e": "2843a0f5003f53ec8be5eb6ea8640bf3",
".git/objects/f7/4a8365a219100d8c86b341fbc7ac08b6c14c5f": "c29542d36534c5786d5d8a7df74f9236",
".git/objects/fb/76bf18972c3f981c972bd46786c09de1d8c18b": "40d0760af2a81c8b8f563cebf164f5ee",
".git/objects/fd/abaec89b399e0176b7fbf6a7d8f86895e32837": "73860c219b9ab6b3518f6ad345a87f37",
".git/ORIG_HEAD": "97c1278cb1001f26525029741ec6a6d8",
".git/refs/heads/main": "861e1f26c5d8a749849ed3ca73a0d059",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "861e1f26c5d8a749849ed3ca73a0d059",
"assets/AssetManifest.bin": "ef581ae2ea3316ca8ebfbb19068689ef",
"assets/AssetManifest.json": "87552799ccc2c28de378c4c85f6b1a3b",
"assets/FontManifest.json": "6eb63f6ecc3ff6f2e9eb5ac731006546",
"assets/fonts/b%2520traffic_0.ttf": "15e8bd9beb4a7b386965248fa8687b5d",
"assets/fonts/MaterialIcons-Regular.otf": "503d757c527dd79f2c435dff8f46648a",
"assets/fonts/vazir-bold.ttf": "8cea4a72681429a50b77de1d8aa609f3",
"assets/fonts/vazir.ttf": "398b39dd0060814801cd1cbfe43fe0b5",
"assets/images/ads/all_ice.png": "2d82ece2f20a44e5647c7063fca92aed",
"assets/images/icons_coffee.png": "d4f34fcc8f8f5d24424cb1ac68006ed8",
"assets/NOTICES": "dca0e8a31af329502b267e3dd308dddf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/persian_fonts/lib/fonts/Sahel.ttf": "25836e3d164d3f4a8d05f2c3cdbaf4af",
"assets/packages/persian_fonts/lib/fonts/Samim.ttf": "dff4f93c6702d280ea2acf25fb4270ae",
"assets/packages/persian_fonts/lib/fonts/Shabnam.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/packages/persian_fonts/lib/fonts/Vazir.ttf": "c456d8064fe9bac3444d70a744446f90",
"assets/packages/persian_fonts/lib/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2aaee3ff684163bc51e0571811df674c",
"/": "2aaee3ff684163bc51e0571811df674c",
"main.dart.js": "66fccbe314f765fa7e43b206bc1353ce",
"manifest.json": "732c42b0baf814036cc8ad2ac92afa4e",
"README.md": "eeae4a9bc472d1461790393d51bacd72",
"version.json": "1694b3c91500f2bb01e405d88e45c945"};
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
