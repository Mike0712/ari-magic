/**
 * Identifies the format and language of a sound file
 */
export declare interface FormatLangPair {
	language: string; // undefined
	format: string; // undefined
}
/**
 * A media file that may be played back.
 */
export declare interface Sound {
	id: string; // Sound's identifier.
	text?: string; // Text description of the sound, usually the words spoken.
	formats: FormatLangPair[]; // The formats and languages in which this sound is available.
}
declare type ListOptions = {
	lang?: string; // Lookup sound for a specific language.
	format?: string; // Lookup sound in a specific format.
}
/**
 * List all sounds.
 * 
 * Method GET 
*/
export declare module List {
	function List(options: ListOptions): Promise<Sound[]>;
}

declare type GetOptions = {
	soundId: string; // Sound's id
}
/**
 * Get a sound's details.
 * 
 * Method GET 
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Sound>;
}

