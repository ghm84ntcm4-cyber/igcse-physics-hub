// Service Worker for IGCSE Physics Hub
// Automatic Cache-Busting & Smart Offline Caching Strategy

const CACHE_VERSION = "physics-hub-v2.0";
const STATIC_CACHE_NAME = `static-${CACHE_VERSION}`;
const RUNTIME_CACHE_NAME = `runtime-${CACHE_VERSION}`;

// Only cache essential static offline assets (not the HTML shell which must be Network-First)
const STATIC_ASSETS = [
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install Event: Cache essential static assets and immediately skip waiting
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Force new service worker to activate immediately without waiting for existing tabs to close
  self.skipWaiting();
});

// Activate Event: Delete old caches and take control of all clients immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== STATIC_CACHE_NAME && name !== RUNTIME_CACHE_NAME)
          .map((name) => {
            console.log("[Service Worker] Deleting obsolete cache:", name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      // Claim all open tabs immediately so they use the new Service Worker logic
      return self.clients.claim();
    })
  );
});

// Fetch Event: Smart routing strategy based on request type
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET requests and browser extensions
  if (request.method !== "GET" || !url.protocol.startsWith("http")) {
    return;
  }

  // 1. Navigation / HTML Document requests (e.g. "/", "/topics", "/quiz")
  // STRATEGY: Network-First (ALWAYS fetch fresh HTML from server so updates are instant)
  if (request.mode === "navigate" || request.destination === "document" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // If response is valid, return it directly to the browser
          return networkResponse;
        })
        .catch(() => {
          // Only if network fails completely (offline mode), fallback to any cached response or offline message
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || new Response(
              "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Offline | Physics Hub</title></head><body style='font-family:sans-serif;text-align:center;padding:40px;'><h2>You are currently offline</h2><p>Please check your internet connection and reload the page.</p></body></html>",
              { headers: { "Content-Type": "text/html; charset=utf-8" } }
            );
          });
        })
    );
    return;
  }

  // 2. Hashed static assets (/assets/* - CSS, JS, Images with content hashes)
  // STRATEGY: Stale-While-Revalidate or Cache-First (Safe because filenames are unique per version)
  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(
      caches.open(RUNTIME_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // 3. All other requests (API calls, fonts, icons)
  // STRATEGY: Network first with runtime cache fallback
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        return networkResponse;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Allow clients to trigger skipWaiting on demand
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
