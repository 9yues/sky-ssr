FROM node:19.1.0

COPY ./public /data/public
COPY ./server /data/server
COPY ./nitro.json /data

EXPOSE 3000

ENTRYPOINT ["node","/data/server/index.mjs"]
