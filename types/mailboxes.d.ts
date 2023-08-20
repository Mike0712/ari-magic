/**
 * Represents the state of a mailbox.
 */
export declare interface Mailbox {
	name: string; // Name of the mailbox.
	old_messages: number; // Count of old messages in the mailbox.
	new_messages: number; // Count of new messages in the mailbox.
}
/**
 * List all mailboxes.
 * 
 * Method GET 
*/
export declare module List {
	function List(): Promise<Mailbox[]>;
}

declare type GetOptions = {
	mailboxName: string; // Name of the mailbox
}
/**
 * Retrieve the current state of a mailbox.
 * 
 * Method GET 
*/
export declare module Get {
	function Get(options: GetOptions): Promise<Mailbox>;
}

declare type UpdateOptions = {
	mailboxName: string; // Name of the mailbox
	oldMessages: number; // Count of old messages in the mailbox
	newMessages: number; // Count of new messages in the mailbox
}
/**
 * Change the state of a mailbox. (Note - implicitly creates the mailbox).
 * 
 * Method PUT 
*/
export declare module Update {
	function Update(options: UpdateOptions): Promise<void>;
}

declare type DeleteOptions = {
	mailboxName: string; // Name of the mailbox
}
/**
 * Destroy a mailbox.
 * 
 * Method DELETE 
*/
export declare module Delete {
	function Delete(options: DeleteOptions): Promise<void>;
}

