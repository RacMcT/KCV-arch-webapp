FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY src .
COPY .env .

EXPOSE 8080
CMD ["node", "server.js"]
