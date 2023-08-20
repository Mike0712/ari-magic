declare module "fetch" {
    import { RequestOptions } from 'http';

    function fetch(
        url: string,
        options?: RequestOptions & { 'Content-Length'?: number },
        body?: string
    ): Promise<any>;

    export = fetch;
}