# syntax=docker/dockerfile:1

FROM node:22.17.0-alpine3.21

RUN apk update && apk upgrade
RUN apk add npm

WORKDIR /auth-api
COPY package.json .
RUN npm i

WORKDIR /auth-api/src
COPY src/ .

WORKDIR /auth-api
CMD ["npm", "run", "dev"]	