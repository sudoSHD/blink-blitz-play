// Offline cache for BLINK BLITZ! (generated). Version: 2619dc6
const CACHE = 'blink-blitz-2619dc6';
const PRECACHE = ["./","assets/gochi-hand-latin-400-normal-D3Iu69dp.woff2","assets/gochi-hand-latin-400-normal-DC0_N7qt.woff","assets/index-Db07BTge.js","assets/index-mYSSPPqt.css","assets/lilita-one-latin-400-normal-87r-Z-Re.woff2","assets/lilita-one-latin-400-normal-DXkechA3.woff","assets/limelight-latin-400-normal-CvlMCR9p.woff2","assets/limelight-latin-400-normal-d7qCOV8D.woff","assets/limelight-latin-ext-400-normal-DFpXQSBH.woff","assets/limelight-latin-ext-400-normal-DPzC3ZDG.woff2","assets/nunito-cyrillic-600-normal-BUjmtIuu.woff","assets/nunito-cyrillic-600-normal-DJGQ2h05.woff2","assets/nunito-cyrillic-800-normal-D3igD7Kl.woff2","assets/nunito-cyrillic-800-normal-DymMgApb.woff","assets/nunito-cyrillic-900-normal-CWPcV0_V.woff2","assets/nunito-cyrillic-900-normal-Dr1fjxoU.woff","assets/nunito-cyrillic-ext-600-normal-CWPPjBOD.woff2","assets/nunito-cyrillic-ext-600-normal-vnfu4DTE.woff","assets/nunito-cyrillic-ext-800-normal-B-cvGohL.woff2","assets/nunito-cyrillic-ext-800-normal-pjRatrRO.woff","assets/nunito-cyrillic-ext-900-normal-BLeVovcl.woff2","assets/nunito-cyrillic-ext-900-normal-DKFql_-q.woff","assets/nunito-latin-600-normal-Br8yIETf.woff2","assets/nunito-latin-600-normal-Cd0eNu1l.woff","assets/nunito-latin-800-normal-D-J0wlBY.woff","assets/nunito-latin-800-normal-Dz8SOQK_.woff2","assets/nunito-latin-900-normal-BVB1fGs6.woff2","assets/nunito-latin-900-normal-CVn49sIn.woff","assets/nunito-latin-ext-600-normal-BKUpuB78.woff","assets/nunito-latin-ext-600-normal-Dd9Zuxh1.woff2","assets/nunito-latin-ext-800-normal-CDcxIxx8.woff","assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","assets/nunito-latin-ext-900-normal-CTBZd6bf.woff","assets/nunito-latin-ext-900-normal-Dllsvgjo.woff2","assets/nunito-vietnamese-600-normal-BY8O6Cug.woff2","assets/nunito-vietnamese-600-normal-DO1RqFw5.woff","assets/nunito-vietnamese-800-normal-D_CZYdm9.woff2","assets/nunito-vietnamese-800-normal-Dz0hZPb5.woff","assets/nunito-vietnamese-900-normal-D6LWQAy_.woff2","assets/nunito-vietnamese-900-normal-WV2-fBew.woff","assets/press-start-2p-cyrillic-400-normal-DBn7fddJ.woff2","assets/press-start-2p-cyrillic-ext-400-normal-CIYZrvmP.woff2","assets/press-start-2p-greek-400-normal-DQfalijU.woff2","assets/press-start-2p-latin-400-normal-KLytu4cr.woff","assets/press-start-2p-latin-400-normal-_wFEWmAB.woff2","assets/press-start-2p-latin-ext-400-normal-DBgyq7ky.woff","assets/press-start-2p-latin-ext-400-normal-DpfYvR5A.woff2","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png","icons/icon.svg","index.html","manifest.webmanifest"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('blink-blitz-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // App shell: any navigation inside the scope gets the cached page (works offline).
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('./index.html').then((hit) => hit || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
