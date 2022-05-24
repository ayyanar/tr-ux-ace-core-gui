/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class Message {
    public type: MessageType;
    public message: string;
}

export enum MessageType {
    Success,
    Error,
    Info,
    Warning
}
