FROM node:8.6.0-alpine

RUN mkdir -p /usr/server
WORKDIR /usr/server
ADD package.json /usr/server
RUN npm install
COPY . /usr/server
EXPOSE 1337
CMD [ "node", "app" ]
