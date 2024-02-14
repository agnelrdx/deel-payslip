import { WebPlugin } from '@capacitor/core';
export class DownloaderWeb extends WebPlugin {
    async download() {
        const link = document.createElement('a');
        link.href = "/payslip.pdf";
        link.download = "payslip.pdf";
        link.dispatchEvent(new MouseEvent('click'));
        return { value: "success" };
    }
}
//# sourceMappingURL=web.js.map