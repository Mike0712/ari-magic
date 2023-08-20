/**
 * Object representing the playback of media to a channel
 */
export declare interface Playback {
	id: string; // ID for this playback operation
	media_uri: string; // The URI for the media currently being played back.
	next_media_uri?: string; // If a list of URIs is being played, the next media URI to be played back.
	target_uri: string; // URI for the channel or bridge to play the media on
	language?: string; // For media types that support multiple languages, the language requested for playback.
	state: 'queued' | 'playing' | 'continuing' | 'done' | 'failed'; // Current state of the playback operation.
}
declare type GetOptions = {
	playbackId: string; // Playback's id
}
/**
 * Get a playback's details.
 *
 * Method GET
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Playback>;
}

declare type StopOptions = {
	playbackId: string; // Playback's id
}
/**
 * Stop a playback.
 *
 * Method DELETE
*/
export declare module Stop {
	function Stop(options: StopOptions): Promise<void>;
}

declare type ControlOptions = {
	playbackId: string; // Playback's id
	operation: 'restart' | 'pause' | 'unpause' | 'reverse' | 'forward'; // Operation to perform on the playback.
}
/**
 * Control a playback.
 *
 * Method POST
*/
export declare module Control {
	function Control(options: ControlOptions): Promise<void>;
}

