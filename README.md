# Admin Starter

This example contains everything needed to development and production environment up and running with Docker Compose.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx.tsx`. The page auto-updates as you edit the file.

[API Controllers](https://expressjs.com/en/guide/routing.html) with [Routing-controllers](https://github.com/typestack/routing-controllers) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `server/controllers/TestController.ts`.

The `server/controllers` directory is mapped to `/api/*`.

---

##Using local mock server
First, run the server:

```bash
npm run api
# or
yarn api
```

Open [https://localhost:8181](https://localhost:8181) with your browser to see the result.
You can start editing and creating controllers in the `_mock-api-server/*` folder.

The server based on express with TypeScript routing-controllers

To learn more about Express with TypeScript, take a look at the following resources:

-   [Express](https://expressjs.com/guide/routing.html) - learn about Express.
-   [routing-controllers](https://github.com/typestack/routing-controllers/blob/develop/README.md) - learn about routing-controllers.

---

## Using Docker

### Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

### Production

Multistage builds are highly recommended in production. Combined with the Next 12 [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Build prod using new BuildKit engine
docker compose -f docker/docker-compose.yml build
# Up prod in detached mode
docker compose -f docker/docker-compose.yml up -d
# Stop
docker compose -f docker/docker-compose.yml down
```

Open [https://localhost:3000](https://localhost:3000).

### Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
# Free space
docker system prune -af --volumes
```
