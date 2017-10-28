FROM node:8.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app

RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install node-gyp -g &&\
  npm install -g forever &&\
  npm install &&\
  npm rebuild bcrypt --build-from-source && \
  npm cache clean --force &&\
  apk del native-deps

COPY . /usr/src/app
CMD [ "forever", "-w", "start", "app" ]
