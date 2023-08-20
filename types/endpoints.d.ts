/**
 * An external device that may offer/accept calls to/from Asterisk.

Unlike most resources, which have a single unique identifier, an endpoint is uniquely identified by the technology/resource pair.
 */
export declare interface Endpoint {
	technology: string; // Technology of the endpoint
	resource: string; // Identifier of the endpoint, specific to the given technology.
	state?: 'unknown' | 'offline' | 'online'; // Endpoint's state
	channel_ids: string[]; // Id's of channels associated with this endpoint
}
/**
 * A text message.
 */
export declare interface TextMessage {
	from: string; // A technology specific URI specifying the source of the message. For sip and pjsip technologies, any SIP URI can be specified. For xmpp, the URI must correspond to the client connection being used to send the message.
	to: string; // A technology specific URI specifying the destination of the message. Valid technologies include sip, pjsip, and xmp. The destination of a message should be an endpoint.
	body: string; // The text of the message.
	variables?: { [key: string]: any; }; // Technology specific key/value pairs (JSON object) associated with the message.
}
/**
 * List all endpoints.
 * 
 * Method GET 
*/
export declare module List {
	function List(): Promise<Endpoint[]>;
}

declare type SendMessageOptions = {
	to: string; // The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
	from: string; // The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
	body?: string; // The body of the message
	variables?: string; // 
}
/**
 * Send a message to some technology URI or endpoint.
 * 
 * Method PUT 
*/
export declare module SendMessage {
	function SendMessage(options: SendMessageOptions): Promise<void>;
}

declare type ListByTechOptions = {
	tech?: string; // Technology of the endpoints (sip,iax2,...)
}
/**
 * List available endoints for a given endpoint technology.
 * 
 * Method GET 
*/
export declare module ListByTech {
	function ListByTech(options: ListByTechOptions): Promise<Endpoint[]>;
}

declare type GetOptions = {
	tech?: string; // Technology of the endpoint
	resource?: string; // ID of the endpoint
}
/**
 * Details for an endpoint.
 * 
 * Method GET 
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Endpoint>;
}

declare type SendMessageToEndpointOptions = {
	tech?: string; // Technology of the endpoint
	resource?: string; // ID of the endpoint
	from: string; // The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
	body?: string; // The body of the message
	variables?: string; // 
}
/**
 * Send a message to some endpoint in a technology.
 * 
 * Method PUT 
*/
export declare module SendMessageToEndpoint {
	function SendMessageToEndpoint(options: SendMessageToEndpointOptions): Promise<void>;
}

