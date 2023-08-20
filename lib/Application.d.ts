import EventEmitter = require('events');
import { AppConfig } from './config';

export declare class Application extends EventEmitter {
    constructor(config: AppConfig)
    public api: Application;
    public init(): this;
    public collectApi(resource: string[]): void;
}