/**
 * Info about how Asterisk was built
 */
export declare interface BuildInfo {
	os: string; // OS Asterisk was built on.
	kernel: string; // Kernel version Asterisk was built on.
	options: string; // Compile time options, or empty string if default.
	machine: string; // Machine architecture (x86_64, i686, ppc, etc.)
	date: string; // Date and time when Asterisk was built.
	user: string; // Username that build Asterisk
}
/**
 * Info about Asterisk
 */
export declare interface SystemInfo {
	version: string; // Asterisk version.
	entity_id: string; // 
}
/**
 * Effective user/group id
 */
export declare interface SetId {
	user: string; // Effective user id.
	group: string; // Effective group id.
}
/**
 * Info about Asterisk configuration
 */
export declare interface ConfigInfo {
	name: string; // Asterisk system name.
	default_language: string; // Default language for media playback.
	max_channels?: number; // Maximum number of simultaneous channels.
	max_open_files?: number; // Maximum number of open file handles (files, sockets).
	max_load?: number; // Maximum load avg on system.
	setid: SetId; // Effective user/group id for running Asterisk.
}
/**
 * Info about Asterisk status
 */
export declare interface StatusInfo {
	startup_time: Date; // Time when Asterisk was started.
	last_reload_time: Date; // Time when Asterisk was last reloaded.
}
/**
 * Asterisk system information
 */
export declare interface AsteriskInfo {
	build?: BuildInfo; // Info about how Asterisk was built
	system?: SystemInfo; // Info about the system running Asterisk
	config?: ConfigInfo; // Info about Asterisk configuration
	status?: StatusInfo; // Info about Asterisk status
}
/**
 * Asterisk ping information
 */
export declare interface AsteriskPing {
	asterisk_id: string; // Asterisk id info
	ping: string; // Always string value is pong
	timestamp: string; // The timestamp string of request received time
}
/**
 * Details of an Asterisk module
 */
export declare interface Module {
	name: string; // The name of this module
	description: string; // The description of this module
	use_count: number; // The number of times this module is being used
	status: string; // The running status of this module
	support_level: string; // The support state of this module
}
/**
 * Details of an Asterisk log channel
 */
export declare interface LogChannel {
	channel: string; // The log channel path
	type: string; // Types of logs for the log channel
	status: string; // Whether or not a log type is enabled
	configuration: string; // The various log levels
}
/**
 * The value of a channel variable
 */
export declare interface Variable {
	value: string; // The value of the variable requested
}
/**
 * A key/value pair that makes up part of a configuration object.
 */
export declare interface ConfigTuple {
	attribute: string; // A configuration object attribute.
	value: string; // The value for the attribute.
}
declare type GetObjectOptions = {
	configClass: string; // The configuration class containing dynamic configuration objects.
	objectType: string; // The type of configuration object to retrieve.
	id: string; // The unique identifier of the object to retrieve.
}
/**
 * Retrieve a dynamic configuration object.
 * 
 * Method GET 
*/
export declare module GetObject {
	function GetObject(options: GetObjectOptions): Promise<ConfigTuple[]>;
}

declare type UpdateObjectOptions = {
	configClass: string; // The configuration class containing dynamic configuration objects.
	objectType: string; // The type of configuration object to create or update.
	id: string; // The unique identifier of the object to create or update.
	fields?: string; // The body object should have a value that is a list of ConfigTuples, which provide the fields to update. Ex. [ { "attribute": "directmedia", "value": "false" } ]
}
/**
 * Create or update a dynamic configuration object.
 * 
 * Method PUT 
*/
export declare module UpdateObject {
	function UpdateObject(options: UpdateObjectOptions): Promise<ConfigTuple[]>;
}

declare type DeleteObjectOptions = {
	configClass: string; // The configuration class containing dynamic configuration objects.
	objectType: string; // The type of configuration object to delete.
	id: string; // The unique identifier of the object to delete.
}
/**
 * Delete a dynamic configuration object.
 * 
 * Method DELETE 
*/
export declare module DeleteObject {
	function DeleteObject(options: DeleteObjectOptions): Promise<void>;
}

declare type GetInfoOptions = {
	only?: 'build' | 'system' | 'config' | 'status'; // Filter information returned
}
/**
 * Gets Asterisk system information.
 * 
 * Method GET 
*/
export declare module GetInfo {
	function GetInfo(options: GetInfoOptions): Promise<AsteriskInfo>;
}

/**
 * Response pong message.
 * 
 * Method GET 
*/
export declare module Ping {
	function Ping(): Promise<AsteriskPing>;
}

/**
 * List Asterisk modules.
 * 
 * Method GET 
*/
export declare module ListModules {
	function ListModules(): Promise<Module[]>;
}

declare type GetModuleOptions = {
	moduleName: string; // Module's name
}
/**
 * Get Asterisk module information.
 * 
 * Method GET 
*/
export declare module GetModule {
	function GetModule(options: GetModuleOptions): Promise<Module>;
}

declare type LoadModuleOptions = {
	moduleName: string; // Module's name
}
/**
 * Load an Asterisk module.
 * 
 * Method POST 
*/
export declare module LoadModule {
	function LoadModule(options: LoadModuleOptions): Promise<void>;
}

declare type UnloadModuleOptions = {
	moduleName: string; // Module's name
}
/**
 * Unload an Asterisk module.
 * 
 * Method DELETE 
*/
export declare module UnloadModule {
	function UnloadModule(options: UnloadModuleOptions): Promise<void>;
}

declare type ReloadModuleOptions = {
	moduleName: string; // Module's name
}
/**
 * Reload an Asterisk module.
 * 
 * Method PUT 
*/
export declare module ReloadModule {
	function ReloadModule(options: ReloadModuleOptions): Promise<void>;
}

/**
 * Gets Asterisk log channel information.
 * 
 * Method GET 
*/
export declare module ListLogChannels {
	function ListLogChannels(): Promise<LogChannel[]>;
}

declare type AddLogOptions = {
	logChannelName: string; // The log channel to add
	configuration: string; // levels of the log channel
}
/**
 * Adds a log channel.
 * 
 * Method POST 
*/
export declare module AddLog {
	function AddLog(options: AddLogOptions): Promise<void>;
}

declare type DeleteLogOptions = {
	logChannelName: string; // Log channels name
}
/**
 * Deletes a log channel.
 * 
 * Method DELETE 
*/
export declare module DeleteLog {
	function DeleteLog(options: DeleteLogOptions): Promise<void>;
}

declare type RotateLogOptions = {
	logChannelName: string; // Log channel's name
}
/**
 * Rotates a log channel.
 * 
 * Method PUT 
*/
export declare module RotateLog {
	function RotateLog(options: RotateLogOptions): Promise<void>;
}

declare type GetGlobalVarOptions = {
	variable: string; // The variable to get
}
/**
 * Get the value of a global variable.
 * 
 * Method GET 
*/
export declare module GetGlobalVar {
	function GetGlobalVar(options: GetGlobalVarOptions): Promise<Variable>;
}

declare type SetGlobalVarOptions = {
	variable: string; // The variable to set
	value?: string; // The value to set the variable to
}
/**
 * Set the value of a global variable.
 * 
 * Method POST 
*/
export declare module SetGlobalVar {
	function SetGlobalVar(options: SetGlobalVarOptions): Promise<void>;
}

