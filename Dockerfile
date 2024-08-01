FROM node:20.15.0 AS build-client

WORKDIR /app/client

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build


FROM oven/bun:1.1-debian AS production

WORKDIR /app

COPY --from=build-client /app/client/dist ./client/dist
COPY --from=build-client /app/client/server ./client/server
COPY --from=build-client /app/client/node_modules ./client/node_modules
COPY --from=build-client /app/client/package.json ./client/package.json
COPY --from=build-client /app/client/package-lock.json ./client/package-lock.json

COPY ./start.sh .

EXPOSE 80/tcp

RUN chmod +x start.sh

ENTRYPOINT ["./start.sh"]