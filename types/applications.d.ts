/**
 * Details of a Stasis application
 */
export declare interface Application {
	name: string; // Name of this application
	channel_ids: string[]; // Id's for channels subscribed to.
	bridge_ids: string[]; // Id's for bridges subscribed to.
	endpoint_ids: string[]; // {tech}/{resource} for endpoints subscribed to.
	device_names: string[]; // Names of the devices subscribed to.
	events_allowed: { [key: string]: any; }[]; // Event types sent to the application.
	events_disallowed: { [key: string]: any; }[]; // Event types not sent to the application.
}
/**
 * List all applications.
 * 
 * Method GET 
*/
export declare module List {
	function List(): Promise<Application[]>;
}

declare type GetOptions = {
	applicationName: string; // Application's name
}
/**
 * Get details of an application.
 * 
 * Method GET 
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Application>;
}

declare type SubscribeOptions = {
	applicationName: string; // Application's name
	eventSource: string; // URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}
}
/**
 * Subscribe an application to a event source.
 * Returns the state of the application after the subscriptions have changed
 * Method POST 
*/
export declare module Subscribe {
	function Subscribe(options: SubscribeOptions): Promise<Application>;
}

declare type UnsubscribeOptions = {
	applicationName: string; // Application's name
	eventSource: string; // URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}
}
/**
 * Unsubscribe an application from an event source.
 * Returns the state of the application after the subscriptions have changed
 * Method DELETE 
*/
export declare module Unsubscribe {
	function Unsubscribe(options: UnsubscribeOptions): Promise<Application>;
}

declare type FilterOptions = {
	applicationName: string; // Application's name
	filter?: { [key: string]: any; }; // Specify which event types to allow/disallow
}
/**
 * Filter application events types.
 * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or both of the following keys can be designated:<br /><br />"allowed" - Specifies an allowed list of event types<br />"disallowed" - Specifies a disallowed list of event types<br /><br />Further, each of those key's value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value:<br /><br />"type" - The type name of the event to filter<br /><br />The value must be the string name (case sensitive) of the event type that needs filtering. For example:<br /><br />{ "allowed": [ { "type": "StasisStart" }, { "type": "StasisEnd" } ] }<br /><br />As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent.<br /><br />The following rules apply:<br /><br />* If the body is empty, both the allowed and disallowed filters are set empty.<br />* If both list types are given then both are set to their respective values (note, specifying an empty array for a given type sets that type to empty).<br />* If only one list type is given then only that type is set. The other type is not updated.<br />* An empty "allowed" list means all events are allowed.<br />* An empty "disallowed" list means no events are disallowed.<br />* Disallowed events take precedence over allowed events if the event type is specified in both lists.
 * Method PUT 
*/
export declare module Filter {
	function Filter(options: FilterOptions): Promise<Application>;
}

