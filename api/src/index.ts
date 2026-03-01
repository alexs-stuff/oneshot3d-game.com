
import { Hono } from 'hono'
import { get_countdown, set_countdown } from './features/countdown.js';
import { cors } from 'hono/cors';
import { bug_report } from './features/bugreporting.js';
import { swaggerUI } from '@hono/swagger-ui';
import swaggerConfig from './swagger.config.js';
import { file } from 'bun';

const app = new Hono()
app.use(cors({ origin: [
  "http://localhost:4321",
  "https://oneshot3d-game.com",
  "https://alex427.com"
]
}))



const prefix = process.env.DOCS_BASE_PATH || '';

await Bun.spawn(['mkdir', '-p', '/storage']).exited;

//swagger docs
app.get("/docs/json/", (c) => c.json(swaggerConfig));

app.get("/docs/", (c) => c.redirect("/docs"));
app.get("/docs", swaggerUI({ url: '/docs/json/',  }));

// countdown
app.get("/countdown", async (c) => {
  return await get_countdown(c);
});

app.post("/countdown/set", (c) => {
  return set_countdown(c, c.req.header("X-API-Key") || "");
});


Bun.serve({
  port: 3862,
  fetch: app.fetch,
  development: false
})