FROM node:8.6.0-alpine

RUN mkdir -p /usr/src/app

ENV PATH $PATH:node_modules/.bin
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

RUN apk add --no-cache bash

CMD [ "npm", "start" ]
