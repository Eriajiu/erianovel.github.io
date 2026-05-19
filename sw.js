const CACHE_NAME = 'novel-reader-v1';
const ASSETS = [
    './',
    './index.html',
    './reader.html',
    './style.css',
    './app.js',
    './manifest.json'
];

// Cài đặt và lưu các file cốt lõi vào cache
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Kích hoạt và xóa cache cũ nếu có thay đổi
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Chiến lược phản hồi khi mất mạng: Ưu tiên Cache -> Network
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
