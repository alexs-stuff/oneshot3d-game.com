import type { Context } from "hono";
import type { CountdownData, CountdownTemplate } from "../types/countdown";
import generate_error from "./error_gen/error_generator";
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from "path";


const isDocker = process.env.DOCKER === 'true';

const COUNTDOWN_FILE = "../../storage/countdown.json";


export function get_countdown(c:Context) {
    const countdown_contents = readFileSync(COUNTDOWN_FILE, 'utf-8');
    if (countdown_contents == null) {
        return c.json(generate_error("countdown data not found"), 404)
    }
    return c.json(JSON.parse(countdown_contents), 200) // rerun parse for formatting and etc
}

export async function set_countdown(c:Context, api_key: string) {
    const body: CountdownTemplate = await c.req.json().catch(() => {
        return c.json(generate_error("malformed request"), 400)
    });

    if (api_key !== process.env.API_KEY) {
        return c.json(generate_error("unauthorized request"), 401)
    }
    if (body.enabled == null || body.target_time == null) {
        return c.json(generate_error("malformed request"), 400)
    }

    if (body.target_time > 9999999999) {
        body.target_time = Math.floor(body.target_time / 1000);
    }

    if (body.target_time <= Math.floor(Date.now() / 1000)) {
        return c.json(generate_error("malformed request, target time needs to be in the future"), 400)
    }



    console.log("COUNTDOWN UPDATED!!")
    write_countdown(body);
    return c.json({ message: "successfully updated the countdown", success: true }, 200);

}

function write_countdown(data: CountdownTemplate) {

    const countdown_data:CountdownData = {
        enabled: data.enabled,
        used_to_be_enabled: data.used_to_be_enabled || false,

        started_at: Date.now() / 1000,
        ends_at: data.target_time,
    }
    writeFileSync(COUNTDOWN_FILE, JSON.stringify(countdown_data,));
    
}