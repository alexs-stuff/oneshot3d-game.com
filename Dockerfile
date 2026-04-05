FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# install all dependencies
FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# build the app
FROM base AS build
COPY --from=install /usr/src/app/node_modules node_modules
COPY . .
# RUN chmod +x ./scripts/bash/init.sh
# RUN ./scripts/bash/init.sh
ENV NODE_ENV=production
RUN bun run build
RUN --mount=type=secret,id=env,target=/usr/src/app/.env bun scripts/cloudflare.mjs

# final image - only dist + production deps
FROM base AS release
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/public/locales ./public/locales

USER bun
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321/tcp
ENTRYPOINT [ "bun", "./dist/server/entry.mjs" ]