import type { Context } from "hono";
import { get_message } from "../messages";
import countdown from "#json_datafiles/countdown.json";



export function get_countdown(c:Context) {
    
    let message:string = ""
    if (!countdown.enabled) {
        message = countdown.was_enabled ? get_message("message.outnow")! : get_message("error.notyet")!;
    }
    return c.json({
        countdown_target:  countdown.enabled ? countdown.countdown_time : message,
        countdown_started: countdown.countdown_started_timestamp,
        enabled: countdown.enabled,
        success: true
    })
}

export async function set_countdown(c:Context, api_key: string) {
    if (api_key !== process.env.API_KEY) {
        return c.json({
            message: "403 Unauthorized",
            success: false
        }, 403);
    }
    const body = await c.req.json()
    const { enabled, timestamp } = body
    

}