FROM node:14.14.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
ENTRYPOINT [ "npm" "run" "build" ] 