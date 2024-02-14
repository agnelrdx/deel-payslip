export interface DownloaderPlugin {
    download(): Promise<{
        value: string;
    }>;
}
