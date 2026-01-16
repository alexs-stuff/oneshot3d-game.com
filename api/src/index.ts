import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { get_countdown, set_countdown } from '#routes/countdown.js';
import { get_socials } from '#routes/socials';
import { cors } from 'hono/cors';

const app = new Hono()
app.use(cors({ origin: [
  "http://localhost:4321",
  "https://oneshot3d-game.com",
  "https://alex427.com"
]
}))


//#region Countdown
app.get("/countdown/get", async (c) => {
    return await get_countdown(c)
});

app.post("/countdown/set", async(c) => {
  return await set_countdown(c, c.req.header("x-api-key")!)
})
//#endregion

//#region Socials
app.get("/socials/get", async (c) => {
  return await get_socials(c);
})
//#endregion

serve({
  fetch: app.fetch,
  port: 3862,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
