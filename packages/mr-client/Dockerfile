FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PORT 3000

COPY package.json /usr/src/app

RUN yarn add \
  yarn cache clean --mirror

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]