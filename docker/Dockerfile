# 1. Install dependencies only when needed
FROM node:16-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

# Install dependencies based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found. Install via yarn" && yarn install; \
  fi

ENV NODE_ENV=production

#build
RUN yarn build
RUN yarn build:server

#move builded server folder
RUN rm -r server
RUN mv dist-server/server server

#run
EXPOSE 3000

ENV PORT 3000

CMD ["node", "server/production.js"]
