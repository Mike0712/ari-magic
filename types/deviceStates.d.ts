/**
 * Represents the state of a device.
 */
export declare interface DeviceState {
	name: string; // Name of the device.
	state: 'UNKNOWN' | 'NOT_INUSE' | 'INUSE' | 'BUSY' | 'INVALID' | 'UNAVAILABLE' | 'RINGING' | 'RINGINUSE' | 'ONHOLD'; // Device's state
}
/**
 * List all ARI controlled device states.
 * 
 * Method GET 
*/
export declare module List {
	function List(): Promise<DeviceState[]>;
}

declare type GetOptions = {
	deviceName: string; // Name of the device
}
/**
 * Retrieve the current state of a device.
 * 
 * Method GET 
*/
export declare module Get {
	function Get(options: GetOptions): Promise<DeviceState>;
}

declare type UpdateOptions = {
	deviceName: string; // Name of the device
	deviceState: 'NOT_INUSE' | 'INUSE' | 'BUSY' | 'INVALID' | 'UNAVAILABLE' | 'RINGING' | 'RINGINUSE' | 'ONHOLD'; // Device state value
}
/**
 * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
 * 
 * Method PUT 
*/
export declare module Update {
	function Update(options: UpdateOptions): Promise<void>;
}

declare type DeleteOptions = {
	deviceName: string; // Name of the device
}
/**
 * Destroy a device-state controlled by ARI.
 * 
 * Method DELETE 
*/
export declare module Delete {
	function Delete(options: DeleteOptions): Promise<void>;
}

