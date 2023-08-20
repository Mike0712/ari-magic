import { Variable } from "asterisk";

/**
 * Dialed channel information.
 */
export declare interface Dialed {
}
/**
 * Dialplan location (context/extension/priority)
 */
export declare interface DialplanCEP {
	context: string; // Context in the dialplan
	exten: string; // Extension in the dialplan
	priority: number; // Priority in the dialplan
	app_name: string; // Name of current dialplan application
	app_data: string; // Parameter of current dialplan application
}
/**
 * Caller identification
 */
export declare interface CallerID {
	name: string;
	number: string;
}
/**
 * A statistics of a RTP.
 */
export declare interface RTPstat {
	txcount: number; // Number of packets transmitted.
	rxcount: number; // Number of packets received.
	txjitter?: number; // Jitter on transmitted packets.
	rxjitter?: number; // Jitter on received packets.
	remote_maxjitter?: number; // Maximum jitter on remote side.
	remote_minjitter?: number; // Minimum jitter on remote side.
	remote_normdevjitter?: number; // Average jitter on remote side.
	remote_stdevjitter?: number; // Standard deviation jitter on remote side.
	local_maxjitter?: number; // Maximum jitter on local side.
	local_minjitter?: number; // Minimum jitter on local side.
	local_normdevjitter?: number; // Average jitter on local side.
	local_stdevjitter?: number; // Standard deviation jitter on local side.
	txploss: number; // Number of transmitted packets lost.
	rxploss: number; // Number of received packets lost.
	remote_maxrxploss?: number; // Maximum number of packets lost on remote side.
	remote_minrxploss?: number; // Minimum number of packets lost on remote side.
	remote_normdevrxploss?: number; // Average number of packets lost on remote side.
	remote_stdevrxploss?: number; // Standard deviation packets lost on remote side.
	local_maxrxploss?: number; // Maximum number of packets lost on local side.
	local_minrxploss?: number; // Minimum number of packets lost on local side.
	local_normdevrxploss?: number; // Average number of packets lost on local side.
	local_stdevrxploss?: number; // Standard deviation packets lost on local side.
	rtt?: number; // Total round trip time.
	maxrtt?: number; // Maximum round trip time.
	minrtt?: number; // Minimum round trip time.
	normdevrtt?: number; // Average round trip time.
	stdevrtt?: number; // Standard deviation round trip time.
	local_ssrc: number; // Our SSRC.
	remote_ssrc: number; // Their SSRC.
	txoctetcount: number; // Number of octets transmitted.
	rxoctetcount: number; // Number of octets received.
	channel_uniqueid: string; // The Asterisk channel's unique ID that owns this instance.
}
/**
 * A specific communication connection between Asterisk and an Endpoint.
 */
export declare interface Channel {
	id: string; // Unique identifier of the channel. This is the same as the Uniqueid field in AMI.
	protocol_id: string; // Protocol id from underlying channel driver (i.e. Call-ID for chan_sip/chan_pjsip; will be empty if not applicable or not implemented by driver).
	name: string; // Name of the channel (i.e. SIP/foo-0000a7e3)
	state: 'Down' | 'Rsrved' | 'OffHook' | 'Dialing' | 'Ring' | 'Ringing' | 'Up' | 'Busy' | 'Dialing Offhook' | 'Pre-ring' | 'Unknown';
	caller: CallerID;
	connected: CallerID;
	accountcode: string;
	dialplan: DialplanCEP; // Current location in the dialplan
	creationtime: Date; // Timestamp when channel was created
	language: string; // The default spoken language
	channelvars?: { [key: string]: any; }; // Channel variables
}
/**
 * List all active channels in Asterisk.
 *
 * Method GET
*/
export declare module List {
	function List(): Promise<Channel[]>;
}

declare type OriginateOptions = {
	endpoint: string; // Endpoint to call.
	extension?: string; // The extension to dial after the endpoint answers. Mutually exclusive with 'app'.
	context?: string; // The context to dial after the endpoint answers. If omitted, uses 'default'. Mutually exclusive with 'app'.
	priority?: number; // The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with 'app'.
	label?: string; // The label to dial after the endpoint answers. Will supersede 'priority' if provided. Mutually exclusive with 'app'.
	app?: string; // The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
	appArgs?: string; // The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
	callerId?: string; // CallerID to use when dialing the endpoint or extension.
	timeout?: number; // Timeout (in seconds) before giving up dialing, or -1 for no timeout.
	variables?: string; // The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
	channelId?: string; // The unique id to assign the channel on creation.
	otherChannelId?: string; // The unique id to assign the second channel when using local channels.
	originator?: string; // The unique id of the channel which is originating this one.
	formats?: string; // The format name capability list to use if originator is not specified. Ex. "ulaw,slin16".  Format names can be found with "core show codecs".
}
/**
 * Create a new channel (originate).
 * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further events and updates.
 * Method POST
*/
export declare module Originate {
	function Originate(options: OriginateOptions): Promise<Channel>;
}

declare type CreateOptions = {
	endpoint: string; // Endpoint for channel communication
	app: string; // Stasis Application to place channel into
	appArgs?: string; // The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
	channelId?: string; // The unique id to assign the channel on creation.
	otherChannelId?: string; // The unique id to assign the second channel when using local channels.
	originator?: string; // Unique ID of the calling channel
	formats?: string; // The format name capability list to use if originator is not specified. Ex. "ulaw,slin16".  Format names can be found with "core show codecs".
	variables?: string; // The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
}
/**
 * Create channel.
 *
 * Method POST
*/
export declare module Create {
	function Create(options: CreateOptions): Promise<Channel>;
}

declare type GetOptions = {
	channelId: string; // Channel's id
}
/**
 * Channel details.
 *
 * Method GET
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Channel>;
}

declare type OriginateWithIdOptions = {
	channelId: string; // The unique id to assign the channel on creation.
	endpoint: string; // Endpoint to call.
	extension?: string; // The extension to dial after the endpoint answers. Mutually exclusive with 'app'.
	context?: string; // The context to dial after the endpoint answers. If omitted, uses 'default'. Mutually exclusive with 'app'.
	priority?: number; // The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with 'app'.
	label?: string; // The label to dial after the endpoint answers. Will supersede 'priority' if provided. Mutually exclusive with 'app'.
	app?: string; // The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
	appArgs?: string; // The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
	callerId?: string; // CallerID to use when dialing the endpoint or extension.
	timeout?: number; // Timeout (in seconds) before giving up dialing, or -1 for no timeout.
	variables?: string; // The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
	otherChannelId?: string; // The unique id to assign the second channel when using local channels.
	originator?: string; // The unique id of the channel which is originating this one.
	formats?: string; // The format name capability list to use if originator is not specified. Ex. "ulaw,slin16".  Format names can be found with "core show codecs".
}
/**
 * Create a new channel (originate with id).
 * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further events and updates.
 * Method POST
*/
export declare module OriginateWithId {
	function OriginateWithId(options: OriginateWithIdOptions): Promise<Channel>;
}

declare type HangupOptions = {
	channelId: string; // Channel's id
	reason?: 'normal' | 'busy' | 'congestion' | 'no_answer' | 'timeout' | 'rejected' | 'unallocated' | 'normal_unspecified' | 'number_incomplete' | 'codec_mismatch' | 'interworking' | 'failure' | 'answered_elsewhere'; // Reason for hanging up the channel
}
/**
 * Delete (i.e. hangup) a channel.
 *
 * Method DELETE
*/
export declare module Hangup {
	function Hangup(options: HangupOptions): Promise<void>;
}

declare type ContinueInDialplanOptions = {
	channelId: string; // Channel's id
	context?: string; // The context to continue to.
	extension?: string; // The extension to continue to.
	priority?: number; // The priority to continue to.
	label?: string; // The label to continue to - will supersede 'priority' if both are provided.
}
/**
 * Exit application; continue execution in the dialplan.
 *
 * Method POST
*/
export declare module ContinueInDialplan {
	function ContinueInDialplan(options: ContinueInDialplanOptions): Promise<void>;
}

declare type MoveOptions = {
	channelId: string; // Channel's id
	app: string; // The channel will be passed to this Stasis application.
	appArgs?: string; // The application arguments to pass to the Stasis application provided by 'app'.
}
/**
 * Move the channel from one Stasis application to another.
 *
 * Method POST
*/
export declare module Move {
	function Move(options: MoveOptions): Promise<void>;
}

declare type RedirectOptions = {
	channelId: string; // Channel's id
	endpoint: string; // The endpoint to redirect the channel to
}
/**
 * Redirect the channel to a different location.
 *
 * Method POST
*/
export declare module Redirect {
	function Redirect(options: RedirectOptions): Promise<void>;
}

declare type AnswerOptions = {
	channelId: string; // Channel's id
}
/**
 * Answer a channel.
 *
 * Method POST
*/
export declare module Answer {
	function Answer(options: AnswerOptions): Promise<void>;
}

declare type RingOptions = {
	channelId: string; // Channel's id
}
/**
 * Indicate ringing to a channel.
 *
 * Method POST
*/
export declare module Ring {
	function Ring(options: RingOptions): Promise<void>;
}

declare type RingStopOptions = {
	channelId: string; // Channel's id
}
/**
 * Stop ringing indication on a channel if locally generated.
 *
 * Method DELETE
*/
export declare module RingStop {
	function RingStop(options: RingStopOptions): Promise<void>;
}

declare type SendDTMFOptions = {
	channelId: string; // Channel's id
	dtmf?: string; // DTMF To send.
	before?: number; // Amount of time to wait before DTMF digits (specified in milliseconds) start.
	between?: number; // Amount of time in between DTMF digits (specified in milliseconds).
	duration?: number; // Length of each DTMF digit (specified in milliseconds).
	after?: number; // Amount of time to wait after DTMF digits (specified in milliseconds) end.
}
/**
 * Send provided DTMF to a given channel.
 *
 * Method POST
*/
export declare module SendDTMF {
	function SendDTMF(options: SendDTMFOptions): Promise<void>;
}

declare type MuteOptions = {
	channelId: string; // Channel's id
	direction?: 'both' | 'in' | 'out'; // Direction in which to mute audio
}
/**
 * Mute a channel.
 *
 * Method POST
*/
export declare module Mute {
	function Mute(options: MuteOptions): Promise<void>;
}

declare type UnmuteOptions = {
	channelId: string; // Channel's id
	direction?: 'both' | 'in' | 'out'; // Direction in which to unmute audio
}
/**
 * Unmute a channel.
 *
 * Method DELETE
*/
export declare module Unmute {
	function Unmute(options: UnmuteOptions): Promise<void>;
}

declare type HoldOptions = {
	channelId: string; // Channel's id
}
/**
 * Hold a channel.
 *
 * Method POST
*/
export declare module Hold {
	function Hold(options: HoldOptions): Promise<void>;
}

declare type UnholdOptions = {
	channelId: string; // Channel's id
}
/**
 * Remove a channel from hold.
 *
 * Method DELETE
*/
export declare module Unhold {
	function Unhold(options: UnholdOptions): Promise<void>;
}

declare type StartMohOptions = {
	channelId: string; // Channel's id
	mohClass?: string; // Music on hold class to use
}
/**
 * Play music on hold to a channel.
 * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application must reinitiate music on hold.
 * Method POST
*/
export declare module StartMoh {
	function StartMoh(options: StartMohOptions): Promise<void>;
}

declare type StopMohOptions = {
	channelId: string; // Channel's id
}
/**
 * Stop playing music on hold to a channel.
 *
 * Method DELETE
*/
export declare module StopMoh {
	function StopMoh(options: StopMohOptions): Promise<void>;
}

declare type StartSilenceOptions = {
	channelId: string; // Channel's id
}
/**
 * Play silence to a channel.
 * Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.
 * Method POST
*/
export declare module StartSilence {
	function StartSilence(options: StartSilenceOptions): Promise<void>;
}

declare type StopSilenceOptions = {
	channelId: string; // Channel's id
}
/**
 * Stop playing silence to a channel.
 *
 * Method DELETE
*/
export declare module StopSilence {
	function StopSilence(options: StopSilenceOptions): Promise<void>;
}

declare type PlayOptions = {
	channelId: string; // Channel's id
	media: string; // Media URIs to play.
	lang?: string; // For sounds, selects language for sound.
	offsetms?: number; // Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
	skipms?: number; // Number of milliseconds to skip for forward/reverse operations.
	playbackId?: string; // Playback ID.
}
/**
 * Start playback of media.
 * The media URI may be any of a number of URI's. Currently sound:, recording:, number:, digits:, characters:, and tone: URI's are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)
 * Method POST
*/
export declare module Play {
	function Play(options: PlayOptions): Promise<Playback>;
}

declare type PlayWithIdOptions = {
	channelId: string; // Channel's id
	playbackId: string; // Playback ID.
	media: string; // Media URIs to play.
	lang?: string; // For sounds, selects language for sound.
	offsetms?: number; // Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
	skipms?: number; // Number of milliseconds to skip for forward/reverse operations.
}
/**
 * Start playback of media and specify the playbackId.
 * The media URI may be any of a number of URI's. Currently sound:, recording:, number:, digits:, characters:, and tone: URI's are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)
 * Method POST
*/
export declare module PlayWithId {
	function PlayWithId(options: PlayWithIdOptions): Promise<Playback>;
}

declare type RecordOptions = {
	channelId: string; // Channel's id
	name: string; // Recording's filename
	format: string; // Format to encode audio in
	maxDurationSeconds?: number; // Maximum duration of the recording, in seconds. 0 for no limit
	maxSilenceSeconds?: number; // Maximum duration of silence, in seconds. 0 for no limit
	ifExists?: 'fail' | 'overwrite' | 'append'; // Action to take if a recording with the same name already exists.
	beep?: boolean; // Play beep when recording begins
	terminateOn?: 'none' | 'any' | '*' | '#'; // DTMF input to terminate recording
}
/**
 * Start a recording.
 * Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if that's what you want.
 * Method POST
*/
export declare module Record {
	function Record(options: RecordOptions): Promise<LiveRecording>;
}

declare type GetChannelVarOptions = {
	channelId: string; // Channel's id
	variable: string; // The channel variable or function to get
}
/**
 * Get the value of a channel variable or function.
 *
 * Method GET
*/
export declare module GetChannelVar {
	function GetChannelVar(options: GetChannelVarOptions): Promise<Variable>;
}

declare type SetChannelVarOptions = {
	channelId: string; // Channel's id
	variable: string; // The channel variable or function to set
	value?: string; // The value to set the variable to
}
/**
 * Set the value of a channel variable or function.
 *
 * Method POST
*/
export declare module SetChannelVar {
	function SetChannelVar(options: SetChannelVarOptions): Promise<void>;
}

declare type SnoopChannelOptions = {
	channelId: string; // Channel's id
	spy?: 'none' | 'both' | 'out' | 'in'; // Direction of audio to spy on
	whisper?: 'none' | 'both' | 'out' | 'in'; // Direction of audio to whisper into
	app: string; // Application the snooping channel is placed into
	appArgs?: string; // The application arguments to pass to the Stasis application
	snoopId?: string; // Unique ID to assign to snooping channel
}
/**
 * Start snooping.
 * Snoop (spy/whisper) on a specific channel.
 * Method POST
*/
export declare module SnoopChannel {
	function SnoopChannel(options: SnoopChannelOptions): Promise<Channel>;
}

declare type SnoopChannelWithIdOptions = {
	channelId: string; // Channel's id
	snoopId: string; // Unique ID to assign to snooping channel
	spy?: 'none' | 'both' | 'out' | 'in'; // Direction of audio to spy on
	whisper?: 'none' | 'both' | 'out' | 'in'; // Direction of audio to whisper into
	app: string; // Application the snooping channel is placed into
	appArgs?: string; // The application arguments to pass to the Stasis application
}
/**
 * Start snooping.
 * Snoop (spy/whisper) on a specific channel.
 * Method POST
*/
export declare module SnoopChannelWithId {
	function SnoopChannelWithId(options: SnoopChannelWithIdOptions): Promise<Channel>;
}

declare type DialOptions = {
	channelId: string; // Channel's id
	caller?: string; // Channel ID of caller
	timeout?: number; // Dial timeout
}
/**
 * Dial a created channel.
 *
 * Method POST
*/
export declare module Dial {
	function Dial(options: DialOptions): Promise<void>;
}

declare type RtpstatisticsOptions = {
	channelId: string; // Channel's id
}
/**
 * RTP stats on a channel.
 *
 * Method GET
*/
export declare module Rtpstatistics {
	function Rtpstatistics(options: RtpstatisticsOptions): Promise<RTPstat>;
}

declare type ExternalMediaOptions = {
	channelId?: string; // The unique id to assign the channel on creation.
	app: string; // Stasis Application to place channel into
	variables?: string; // The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
	external_host: string; // Hostname/ip:port of external host
	encapsulation?: 'rtp'; // Payload encapsulation protocol
	transport?: 'udp'; // Transport protocol
	connection_type?: 'client'; // Connection type (client/server)
	format: string; // Format to encode audio in
	direction?: 'both'; // External media direction
}
/**
 * Start an External Media session.
 * Create a channel to an External Media source/sink.
 * Method POST
*/
export declare module ExternalMedia {
	function ExternalMedia(options: ExternalMediaOptions): Promise<Channel>;
}

