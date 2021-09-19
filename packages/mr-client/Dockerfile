FROM node:alpine

RUN mkdir -p /usr/src/mr-client

WORKDIR /usr/src/mr-client

COPY ./packages/mr-client/. /usr/src/mr-client

COPY *.env.deployment /usr/src/mr-client

RUN yarn install --silent

ENV PORT 3000

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]