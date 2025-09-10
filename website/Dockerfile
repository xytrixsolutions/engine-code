FROM node:22-alpine AS builder
WORKDIR /app

COPY .env ./

COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

# --- runtime stage ---
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy Next standalone server
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/standalone/.env ./
# Copy static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]

