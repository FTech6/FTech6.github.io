const cacheName = self.location.pathname
const pages = [

  "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/introduction/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/organisation/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/pages/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/create-a-site/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/styles/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/menus/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/getting-started/configuration/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/customization/inject-partials/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/blog/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/multilingual/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/",
    "/",
    "/docs/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/asciinema/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/buttons/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/columns/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/details/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/images/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/hints/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/mermaid/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/section/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/steps/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/tabs/",
    "/categories/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/katex/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/content/shortcodes/experimental/openapi/",
    "/tags/",
    "/docs/%E6%9C%AC%E7%AB%99%E7%8E%B0%E5%86%B5/",
    "/book/",
    "/contact/",
    "/docs/%E5%BB%BA%E7%AB%99%E7%A4%BA%E4%BE%8B%E5%86%85%E5%AE%B9/",
    "/book.min.98c83e4c8e1c8661368bcb29bbaf4dcc9d31b8164f76aae322d82d86a9750c65.css",
  "/zh.search-data.min.df1b1491d0cb0eb97f31dcc040a8d594b8eb0f46a18598ef66985ccbbb2fdd68.json",
  "/zh.search.min.67606e2ddee7a0baf3d917c67fd6ddc124ac8c07585152839d422470fbb9612c.js",
  
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
