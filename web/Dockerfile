FROM oven/bun:alpine AS runtime
WORKDIR /app

COPY . .


RUN bun install

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL=${PUBLIC_API_URL}

RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["bun", "./dist/server/entry.mjs"]