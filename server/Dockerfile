FROM node:8.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install -g nodemon && \
  npm rebuild bcrypt --build-from-source

COPY . /usr/src/app
CMD [ "nodemon", "app" ]
