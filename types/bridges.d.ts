import { Playback } from "playbacks";
import { LiveRecording } from "recordings";

/**
 * The merging of media from one or more channels.

Everyone on the bridge receives the same audio.
 */
export declare interface Bridge {
	id: string; // Unique identifier for this bridge
	technology: string; // Name of the current bridging technology
	bridge_type: 'mixing' | 'holding'; // Type of bridge technology
	bridge_class: string; // Bridging class
	creator: string; // Entity that created the bridge
	name: string; // Name the creator gave the bridge
	channels: string[]; // Ids of channels participating in this bridge
	video_mode?: string; // The video mode the bridge is using. One of 'none', 'talker', 'sfu', or 'single'.
	video_source_id?: string; // The ID of the channel that is the source of video in this bridge, if one exists.
	creationtime: Date; // Timestamp when bridge was created
}
/**
 * List all active bridges in Asterisk.
 *
 * Method GET
*/
export declare module List {
	function List(): Promise<Bridge[]>;
}

declare type CreateOptions = {
	type?: string; // Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu, video_single).
	bridgeId?: string; // Unique ID to give to the bridge being created.
	name?: string; // Name to give to the bridge being created.
}
/**
 * Create a new bridge.
 * This bridge persists until it has been shut down, or Asterisk has been shut down.
 * Method POST
*/
export declare module Create {
	function Create(options: CreateOptions): Promise<Bridge>;
}

declare type CreateWithIdOptions = {
	type?: string; // Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu, video_single) to set.
	bridgeId: string; // Unique ID to give to the bridge being created.
	name?: string; // Set the name of the bridge.
}
/**
 * Create a new bridge or updates an existing one.
 * This bridge persists until it has been shut down, or Asterisk has been shut down.
 * Method POST
*/
export declare module CreateWithId {
	function CreateWithId(options: CreateWithIdOptions): Promise<Bridge>;
}

declare type GetOptions = {
	bridgeId: string; // Bridge's id
}
/**
 * Get bridge details.
 *
 * Method GET
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Bridge>;
}

declare type DestroyOptions = {
	bridgeId: string; // Bridge's id
}
/**
 * Shut down a bridge.
 * If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.
 * Method DELETE
*/
export declare module Destroy {
	function Destroy(options: DestroyOptions): Promise<void>;
}

declare type AddChannelOptions = {
	bridgeId: string; // Bridge's id
	channel: string; // Ids of channels to add to bridge
	role?: string; // Channel's role in the bridge
	absorbDTMF?: boolean; // Absorb DTMF coming from this channel, preventing it to pass through to the bridge
	mute?: boolean; // Mute audio from this channel, preventing it to pass through to the bridge
}
/**
 * Add a channel to a bridge.
 *
 * Method POST
*/
export declare module AddChannel {
	function AddChannel(options: AddChannelOptions): Promise<void>;
}

declare type RemoveChannelOptions = {
	bridgeId: string; // Bridge's id
	channel: string; // Ids of channels to remove from bridge
}
/**
 * Remove a channel from a bridge.
 *
 * Method POST
*/
export declare module RemoveChannel {
	function RemoveChannel(options: RemoveChannelOptions): Promise<void>;
}

declare type SetVideoSourceOptions = {
	bridgeId: string; // Bridge's id
	channelId: string; // Channel's id
}
/**
 * Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
 *
 * Method POST
*/
export declare module SetVideoSource {
	function SetVideoSource(options: SetVideoSourceOptions): Promise<void>;
}

declare type ClearVideoSourceOptions = {
	bridgeId: string; // Bridge's id
}
/**
 * Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk detection will be used to determine the active video stream.
 *
 * Method DELETE
*/
export declare module ClearVideoSource {
	function ClearVideoSource(options: ClearVideoSourceOptions): Promise<void>;
}

declare type StartMohOptions = {
	bridgeId: string; // Bridge's id
	mohClass?: string; // Channel's id
}
/**
 * Play music on hold to a bridge or change the MOH class that is playing.
 *
 * Method POST
*/
export declare module StartMoh {
	function StartMoh(options: StartMohOptions): Promise<void>;
}

declare type StopMohOptions = {
	bridgeId: string; // Bridge's id
}
/**
 * Stop playing music on hold to a bridge.
 * This will only stop music on hold being played via POST bridges/{bridgeId}/moh.
 * Method DELETE
*/
export declare module StopMoh {
	function StopMoh(options: StopMohOptions): Promise<void>;
}

declare type PlayOptions = {
	bridgeId: string; // Bridge's id
	media: string; // Media URIs to play.
	lang?: string; // For sounds, selects language for sound.
	offsetms?: number; // Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
	skipms?: number; // Number of milliseconds to skip for forward/reverse operations.
	playbackId?: string; // Playback Id.
}
/**
 * Start playback of media on a bridge.
 * The media URI may be any of a number of URI's. Currently sound:, recording:, number:, digits:, characters:, and tone: URI's are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)
 * Method POST
*/
export declare module Play {
	function Play(options: PlayOptions): Promise<Playback>;
}

declare type PlayWithIdOptions = {
	bridgeId: string; // Bridge's id
	playbackId: string; // Playback ID.
	media: string; // Media URIs to play.
	lang?: string; // For sounds, selects language for sound.
	offsetms?: number; // Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
	skipms?: number; // Number of milliseconds to skip for forward/reverse operations.
}
/**
 * Start playback of media on a bridge.
 * The media URI may be any of a number of URI's. Currently sound:, recording:, number:, digits:, characters:, and tone: URI's are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)
 * Method POST
*/
export declare module PlayWithId {
	function PlayWithId(options: PlayWithIdOptions): Promise<Playback>;
}

declare type RecordOptions = {
	bridgeId: string; // Bridge's id
	name: string; // Recording's filename
	format: string; // Format to encode audio in
	maxDurationSeconds?: number; // Maximum duration of the recording, in seconds. 0 for no limit.
	maxSilenceSeconds?: number; // Maximum duration of silence, in seconds. 0 for no limit.
	ifExists?: 'fail' | 'overwrite' | 'append'; // Action to take if a recording with the same name already exists.
	beep?: boolean; // Play beep when recording begins
	terminateOn?: 'none' | 'any' | '*' | '#'; // DTMF input to terminate recording.
}
/**
 * Start a recording.
 * This records the mixed audio from all channels participating in this bridge.
 * Method POST
*/
export declare module Record {
	function Record(options: RecordOptions): Promise<LiveRecording>;
}

