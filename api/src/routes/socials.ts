import type { Context } from "hono";
import socials from "#json_datafiles/socials.json";

export function get_socials(c:Context) {
    return c.json(socials)
}