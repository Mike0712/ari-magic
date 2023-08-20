import { Channel } from "./channels";
import { Bridge } from "./bridges";
import { DeviceState } from "deviceStates";
import { Playback } from "playbacks";
import { LiveRecording } from "recordings";
import { Endpoint, TextMessage } from "endpoints";

/**
 * Base type for errors and events
 */
export declare interface Message {
	type: string; // Indicates the type of this message.
	asterisk_id?: string; // The unique ID for the Asterisk instance that raised this event.
}
/**
 * Error event sent when required params are missing.
 */
export declare interface MissingParams {
	params: string[]; // A list of the missing parameters
}
/**
 * Base type for asynchronous events from Asterisk.
 */
export declare interface Event {
	application: string; // Name of the application receiving the event.
	timestamp: Date; // Time at which this event was created.
}
/**
 * Detailed information about a contact on an endpoint.
 */
export declare interface ContactInfo {
	uri: string; // The location of the contact.
	contact_status: 'Unreachable' | 'Reachable' | 'Unknown' | 'NonQualified' | 'Removed'; // The current status of the contact.
	aor: string; // The Address of Record this contact belongs to.
	roundtrip_usec?: string; // Current round trip time, in microseconds, for the contact.
}
/**
 * Detailed information about a remote peer that communicates with Asterisk.
 */
export declare interface Peer {
	peer_status: string; // The current state of the peer. Note that the values of the status are dependent on the underlying peer technology.
	cause?: string; // An optional reason associated with the change in peer_status.
	address?: string; // The IP address of the peer.
	port?: string; // The port of the peer.
	time?: string; // The last known time the peer was contacted.
}
/**
 * Notification that a device state has changed.
 */
export declare interface DeviceStateChanged {
	device_state: DeviceState; // Device state object
}
/**
 * Event showing the start of a media playback operation.
 */
export declare interface PlaybackStarted {
	playback: Playback; // Playback control object
}
/**
 * Event showing the continuation of a media playback operation from one media URI to the next in the list.
 */
export declare interface PlaybackContinuing {
	playback: Playback; // Playback control object
}
/**
 * Event showing the completion of a media playback operation.
 */
export declare interface PlaybackFinished {
	playback: Playback; // Playback control object
}
/**
 * Event showing the start of a recording operation.
 */
export declare interface RecordingStarted {
	recording: LiveRecording; // Recording control object
}
/**
 * Event showing the completion of a recording operation.
 */
export declare interface RecordingFinished {
	recording: LiveRecording; // Recording control object
}
/**
 * Event showing failure of a recording operation.
 */
export declare interface RecordingFailed {
	recording: LiveRecording; // Recording control object
}
/**
 * Notification that trying to move a channel to another Stasis application failed.
 */
export declare interface ApplicationMoveFailed {
	channel: Channel; // undefined
	destination: string; // undefined
	args: string[]; // Arguments to the application
}
/**
 * Notification that another WebSocket has taken over for an application.

An application may only be subscribed to by a single WebSocket at a time. If multiple WebSockets attempt to subscribe to the same application, the newer WebSocket wins, and the older one receives this event.
 */
export declare interface ApplicationReplaced {
}
/**
 * Notification that a bridge has been created.
 */
export declare interface BridgeCreated {
	bridge: Bridge; // undefined
}
/**
 * Notification that a bridge has been destroyed.
 */
export declare interface BridgeDestroyed {
	bridge: Bridge; // undefined
}
/**
 * Notification that one bridge has merged into another.
 */
export declare interface BridgeMerged {
	bridge: Bridge; // undefined
	bridge_from: Bridge; // undefined
}
/**
 * Notification that the source of video in a bridge has changed.
 */
export declare interface BridgeVideoSourceChanged {
	bridge: Bridge; // undefined
	old_video_source_id?: string; // undefined
}
/**
 * Notification that a blind transfer has occurred.
 */
export declare interface BridgeBlindTransfer {
	channel: Channel; // The channel performing the blind transfer
	replace_channel?: Channel; // The channel that is replacing transferer when the transferee(s) can not be transferred directly
	transferee?: Channel; // The channel that is being transferred
	exten: string; // The extension transferred to
	context: string; // The context transferred to
	result: string; // The result of the transfer attempt
	is_external: boolean; // Whether the transfer was externally initiated or not
	bridge?: Bridge; // The bridge being transferred
}
/**
 * Notification that an attended transfer has occurred.
 */
export declare interface BridgeAttendedTransfer {
	transferer_first_leg: Channel; // First leg of the transferer
	transferer_second_leg: Channel; // Second leg of the transferer
	replace_channel?: Channel; // The channel that is replacing transferer_first_leg in the swap
	transferee?: Channel; // The channel that is being transferred
	transfer_target?: Channel; // The channel that is being transferred to
	result: string; // The result of the transfer attempt
	is_external: boolean; // Whether the transfer was externally initiated or not
	transferer_first_leg_bridge?: Bridge; // Bridge the transferer first leg is in
	transferer_second_leg_bridge?: Bridge; // Bridge the transferer second leg is in
	destination_type: string; // How the transfer was accomplished
	destination_bridge?: string; // Bridge that survived the merge result
	destination_application?: string; // Application that has been transferred into
	destination_link_first_leg?: Channel; // First leg of a link transfer result
	destination_link_second_leg?: Channel; // Second leg of a link transfer result
	destination_threeway_channel?: Channel; // Transferer channel that survived the threeway result
	destination_threeway_bridge?: Bridge; // Bridge that survived the threeway result
}
/**
 * Notification that a channel has been created.
 */
export declare interface ChannelCreated {
	channel: Channel; // undefined
}
/**
 * Notification that a channel has been destroyed.
 */
export declare interface ChannelDestroyed {
	cause: number; // Integer representation of the cause of the hangup
	cause_txt: string; // Text representation of the cause of the hangup
	channel: Channel; // undefined
}
/**
 * Notification that a channel has entered a bridge.
 */
export declare interface ChannelEnteredBridge {
	bridge: Bridge; // undefined
	channel?: Channel; // undefined
}
/**
 * Notification that a channel has left a bridge.
 */
export declare interface ChannelLeftBridge {
	bridge: Bridge; // undefined
	channel: Channel; // undefined
}
/**
 * Notification of a channel's state change.
 */
export declare interface ChannelStateChange {
	channel: Channel; // undefined
}
/**
 * DTMF received on a channel.

This event is sent when the DTMF ends. There is no notification about the start of DTMF
 */
export declare interface ChannelDtmfReceived {
	digit: string; // DTMF digit received (0-9, A-E, # or *)
	duration_ms: number; // Number of milliseconds DTMF was received
	channel: Channel; // The channel on which DTMF was received
}
/**
 * Channel changed location in the dialplan.
 */
export declare interface ChannelDialplan {
	channel: Channel; // The channel that changed dialplan location.
	dialplan_app: string; // The application about to be executed.
	dialplan_app_data: string; // The data to be passed to the application.
}
/**
 * Channel changed Caller ID.
 */
export declare interface ChannelCallerId {
	caller_presentation: number; // The integer representation of the Caller Presentation value.
	caller_presentation_txt: string; // The text representation of the Caller Presentation value.
	channel: Channel; // The channel that changed Caller ID.
}
/**
 * User-generated event with additional user-defined fields in the object.
 */
export declare interface ChannelUserevent {
	eventname: string; // The name of the user event.
	channel?: Channel; // A channel that is signaled with the user event.
	bridge?: Bridge; // A bridge that is signaled with the user event.
	endpoint?: Endpoint; // A endpoint that is signaled with the user event.
	userevent: { [key: string]: any; }; // Custom Userevent data
}
/**
 * A hangup was requested on the channel.
 */
export declare interface ChannelHangupRequest {
	cause?: number; // Integer representation of the cause of the hangup.
	soft?: boolean; // Whether the hangup request was a soft hangup request.
	channel: Channel; // The channel on which the hangup was requested.
}
/**
 * Channel variable changed.
 */
export declare interface ChannelVarset {
	variable: string; // The variable that changed.
	value: string; // The new value of the variable.
	channel?: Channel; // The channel on which the variable was set.If missing, the variable is a global variable.
}
/**
 * A channel initiated a media hold.
 */
export declare interface ChannelHold {
	channel: Channel; // The channel that initiated the hold event.
	musicclass?: string; // The music on hold class that the initiator requested.
}
/**
 * A channel initiated a media unhold.
 */
export declare interface ChannelUnhold {
	channel: Channel; // The channel that initiated the unhold event.
}
/**
 * Talking was detected on the channel.
 */
export declare interface ChannelTalkingStarted {
	channel: Channel; // The channel on which talking started.
}
/**
 * Talking is no longer detected on the channel.
 */
export declare interface ChannelTalkingFinished {
	channel: Channel; // The channel on which talking completed.
	duration: number; // The length of time, in milliseconds, that talking was detected on the channel
}
/**
 * The state of a contact on an endpoint has changed.
 */
export declare interface ContactStatusChange {
	endpoint: Endpoint; // undefined
	contact_info: ContactInfo; // undefined
}
/**
 * The state of a peer associated with an endpoint has changed.
 */
export declare interface PeerStatusChange {
	endpoint: Endpoint; // undefined
	peer: Peer; // undefined
}
/**
 * Endpoint state changed.
 */
export declare interface EndpointStateChange {
	endpoint: Endpoint; // undefined
}
/**
 * Dialing state has changed.
 */
export declare interface Dial {
	caller?: Channel; // The calling channel.
	peer: Channel; // The dialed channel.
	forward?: string; // Forwarding target requested by the original dialed channel.
	forwarded?: Channel; // Channel that the caller has been forwarded to.
	dialstring?: string; // The dial string for calling the peer channel.
	dialstatus: string; // Current status of the dialing attempt to the peer.
}
/**
 * Notification that a channel has left a Stasis application.
 */
export declare interface StasisEnd {
	channel: Channel; // undefined
}
/**
 * Notification that a channel has entered a Stasis application.
 */
export declare interface StasisStart {
	args: string[]; // Arguments to the application
	channel: Channel; // undefined
	replace_channel?: Channel; // undefined
}
/**
 * A text message was received from an endpoint.
 */
export declare interface TextMessageReceived {
	message: TextMessage; // undefined
	endpoint?: Endpoint; // undefined
}
/**
 * Channel changed Connected Line.
 */
export declare interface ChannelConnectedLine {
	channel: Channel; // The channel whose connected line has changed.
}
declare type EventWebsocketOptions = {
	app: string; // Applications to subscribe to.
	subscribeAll?: boolean; // Subscribe to all Asterisk events. If provided, the applications listed will be subscribed to all events, effectively disabling the application specific subscriptions. Default is 'false'.
}
/**
 * WebSocket connection for events.
 *
 * Method GET
*/
export declare module EventWebsocket {
	function EventWebsocket(options: EventWebsocketOptions): Promise<Message>;
}

declare type UserEventOptions = {
	eventName: string; // Event name
	application: string; // The name of the application that will receive this event
	source?: string; // URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}/{resource}, deviceState:{deviceName}
	variables?: string; // The "variables" key in the body object holds custom key/value pairs to add to the user event. Ex. { "variables": { "key": "value" } }
}
/**
 * Generate a user event.
 *
 * Method POST
*/
export declare module UserEvent {
	function UserEvent(options: UserEventOptions): Promise<void>;
}

