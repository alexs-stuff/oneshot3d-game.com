
import { Hono } from 'hono'
import { get_countdown, set_countdown } from '#routes/countdown.js';
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


//#endregion

Bun.serve({
  port: 3862,
  fetch: app.fetch,
  development: false
})