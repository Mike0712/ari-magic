export declare type AppConfig = {
    path?: string,
    items?: {
        host: string,
        port: string,
        protocol: string,
        api: string,
        key: string,
        applications: string | string[],
        subscribeAll: boolean,
    };
}