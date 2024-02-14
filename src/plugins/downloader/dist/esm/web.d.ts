import { WebPlugin } from '@capacitor/core';
import type { DownloaderPlugin } from './definitions';
export declare class DownloaderWeb extends WebPlugin implements DownloaderPlugin {
    download(): Promise<{
        value: string;
    }>;
}
