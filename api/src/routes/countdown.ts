import type { Context } from "hono";
import { get_message } from "../messages";
import countdown from "#json_datafiles/countdown.json";



export function get_countdown(c:Context) {
    return c.json({
        countdown: 0,
        info: countdown.was_enabled && countdown.countdown_time <= 0 ? get_message("message.outnow") : get_message("error.notyet") ,
        enabled: false,
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