export declare class Message {
    type: MessageType;
    message: string;
}
export declare enum MessageType {
    Success = 0,
    Error = 1,
    Info = 2,
    Warning = 3
}
