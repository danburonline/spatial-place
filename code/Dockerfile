FROM node:alpine

RUN mkdir -p /usr/src/mr-client

WORKDIR /usr/src/heog-frontend

COPY . /usr/src/heog-frontend

RUN yarn install --silent

ENV PORT 3000

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]