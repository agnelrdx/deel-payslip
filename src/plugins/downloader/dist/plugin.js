var capacitorDownloader = (function (exports, core) {
    'use strict';

    const Downloader = core.registerPlugin('Downloader', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DownloaderWeb()),
    });

    class DownloaderWeb extends core.WebPlugin {
        async download() {
            const link = document.createElement('a');
            link.href = "/payslip.pdf";
            link.download = "payslip.pdf";
            link.dispatchEvent(new MouseEvent('click'));
            return { value: "success" };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DownloaderWeb: DownloaderWeb
    });

    exports.Downloader = Downloader;

    return exports;

})({}, capacitorExports);
