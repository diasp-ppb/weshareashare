FROM node:8.8.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

RUN apk add --no-cache bash

CMD [ "npm", "start" ]
