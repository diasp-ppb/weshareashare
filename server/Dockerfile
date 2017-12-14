FROM node:8.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app

RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm cache clean --force &&\
  npm install node-gyp -g &&\
  npm install -g nodemon &&\
  npm install &&\
  npm rebuild bcrypt --build-from-source && \
  npm cache clean --force &&\
  apk del native-deps

RUN apk update && apk upgrade \
      && apk add pdftk

COPY . /usr/src/app
CMD [ "nodemon", "app" ]
