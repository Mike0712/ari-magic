/**
 * A past recording that may be played back.
 */
export declare interface StoredRecording {
	name: string; // undefined
	format: string; // undefined
}
/**
 * A recording that is in progress
 */
export declare interface LiveRecording {
	name: string; // Base name for the recording
	format: string; // Recording format (wav, gsm, etc.)
	target_uri: string; // URI for the channel or bridge being recorded
	state: 'queued' | 'recording' | 'paused' | 'done' | 'failed' | 'canceled'; // undefined
	duration?: number; // Duration in seconds of the recording
	talking_duration?: number; // Duration of talking, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds.
	silence_duration?: number; // Duration of silence, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds.
	cause?: string; // Cause for recording failure if failed
}
/**
 * List recordings that are complete.
 *
 * Method GET
*/
export declare module ListStored {
	function ListStored(): Promise<StoredRecording[]>;
}

declare type GetStoredOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Get a stored recording's details.
 *
 * Method GET
*/
export declare module GetStored {
	function GetStored(options: GetStoredOptions): Promise<StoredRecording>;
}

declare type DeleteStoredOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Delete a stored recording.
 *
 * Method DELETE
*/
export declare module DeleteStored {
	function DeleteStored(options: DeleteStoredOptions): Promise<void>;
}

declare type GetStoredFileOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Get the file associated with the stored recording.
 *
 * Method GET
*/
export declare module GetStoredFile {
	function GetStoredFile(options: GetStoredFileOptions): Promise<binary>;
}

declare type CopyStoredOptions = {
	recordingName: string; // The name of the recording to copy
	destinationRecordingName: string; // The destination name of the recording
}
/**
 * Copy a stored recording.
 *
 * Method POST
*/
export declare module CopyStored {
	function CopyStored(options: CopyStoredOptions): Promise<StoredRecording>;
}

declare type GetLiveOptions = {
	recordingName: string; // The name of the recording
}
/**
 * List live recordings.
 *
 * Method GET
*/
export declare module GetLive {
	function GetLive(options: GetLiveOptions): Promise<LiveRecording>;
}

declare type CancelOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Stop a live recording and discard it.
 *
 * Method DELETE
*/
export declare module Cancel {
	function Cancel(options: CancelOptions): Promise<void>;
}

declare type StopOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Stop a live recording and store it.
 *
 * Method POST
*/
export declare module Stop {
	function Stop(options: StopOptions): Promise<void>;
}

declare type PauseOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Pause a live recording.
 * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
 * Method POST
*/
export declare module Pause {
	function Pause(options: PauseOptions): Promise<void>;
}

declare type UnpauseOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Unpause a live recording.
 *
 * Method DELETE
*/
export declare module Unpause {
	function Unpause(options: UnpauseOptions): Promise<void>;
}

declare type MuteOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Mute a live recording.
 * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
 * Method POST
*/
export declare module Mute {
	function Mute(options: MuteOptions): Promise<void>;
}

declare type UnmuteOptions = {
	recordingName: string; // The name of the recording
}
/**
 * Unmute a live recording.
 *
 * Method DELETE
*/
export declare module Unmute {
	function Unmute(options: UnmuteOptions): Promise<void>;
}

