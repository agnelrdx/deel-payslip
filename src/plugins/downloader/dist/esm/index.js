import { registerPlugin } from '@capacitor/core';
const Downloader = registerPlugin('Downloader', {
    web: () => import('./web').then(m => new m.DownloaderWeb()),
});
export * from './definitions';
export { Downloader };
//# sourceMappingURL=index.js.map