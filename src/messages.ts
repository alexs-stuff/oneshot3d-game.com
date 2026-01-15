import messages from "#json_datafiles/messages.json";

interface MessageData {
    [key:string]: string;
}

const messageData: MessageData = messages;

export function get_message(key:string) : string | undefined {
    return messageData[key] || key
}