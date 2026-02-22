import type { Context } from "hono";

function sanitize(input: string) {

}

export async function bug_report(c:Context) {
    
    return c.json({
        message: "Unable to bug report selected",
        success: false
    }, 200)
}