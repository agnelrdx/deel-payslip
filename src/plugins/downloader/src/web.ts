import { WebPlugin } from '@capacitor/core';

import type { DownloaderPlugin } from './definitions';

export class DownloaderWeb extends WebPlugin implements DownloaderPlugin {
  async download(): Promise<{ value: string }> {
    const link = document.createElement('a');
    link.href = "/payslip.pdf";
    link.download = "payslip.pdf";
    link.dispatchEvent(new MouseEvent('click'));
    return { value: "success" };
  }
}