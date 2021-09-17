FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PORT 3000

COPY package.json /usr/src/app

RUN yarn install

COPY . /usr/src/app

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]