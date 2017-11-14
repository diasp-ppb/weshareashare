FROM node:8.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
CMD [ "npm", "run", "dev" ]
