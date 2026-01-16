import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { get_countdown, set_countdown } from '#routes/countdown.js';

const app = new Hono()


app.get("/countdown/get", async (c) => {
    return await get_countdown(c)
});

app.post("/countdown/set", async(c) => {
  return await set_countdown(c, c.req.header("x-api-key")!)
})

serve({
  fetch: app.fetch,
  port: 3862,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
