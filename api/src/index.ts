
import { Hono } from 'hono'
import { get_countdown, set_countdown } from './features/countdown.js';
import { cors } from 'hono/cors';
import { bug_report } from './features/bugreporting.js';
import { swaggerUI } from '@hono/swagger-ui';
import swaggerConfig from './swagger.config.mjs';

const app = new Hono()
app.use(cors({ origin: [
  "http://localhost:4321",
  "https://oneshot3d-game.com",
  "https://alex427.com"
]
}))




//swagger docs
app.get("/docs/json/", (c) => c.json(swaggerConfig));

app.get("/docs/", swaggerUI({ url: '/docs/json/',  }))
app.get("/docs", swaggerUI({ url: '/docs/json/',  }))



Bun.serve({
  port: 3862,
  fetch: app.fetch,
  development: false
})