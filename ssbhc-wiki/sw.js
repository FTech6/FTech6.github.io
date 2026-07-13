const cacheName = self.location.pathname
const pages = [

  "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/introduction/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/organisation/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/pages/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/create-a-site/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/styles/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/menus/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/configuration/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/inject-partials/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/blog/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/multilingual/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/",
    "/ssbhc-wiki/",
    "/ssbhc-wiki/docs/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/asciinema/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/buttons/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/columns/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/details/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/images/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/hints/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/mermaid/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/section/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/steps/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/tabs/",
    "/ssbhc-wiki/categories/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/katex/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/openapi/",
    "/ssbhc-wiki/tags/",
    "/ssbhc-wiki/docs/%E6%9C%AC%E7%AB%99%E7%8E%B0%E5%86%B5/",
    "/ssbhc-wiki/book/",
    "/ssbhc-wiki/contact/",
    "/ssbhc-wiki/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/",
    "/ssbhc-wiki/book.min.98c83e4c8e1c8661368bcb29bbaf4dcc9d31b8164f76aae322d82d86a9750c65.css",
  "/ssbhc-wiki/zh.search-data.min.3ddf5b423f6083cc98aa1b3f416e55bdb15cbf53f55dadb7ce8ea8ae9d74a7fa.json",
  "/ssbhc-wiki/zh.search.min.6a7d7f1511bb01288fa1f8691c42bdc41c8364821aa7229690de9be7ee2e254a.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
