FROM node:alpine

RUN mkdir -p /usr/src/mr-client

WORKDIR /usr/src/heog-frontend

COPY . /usr/src/heog-frontend

RUN pnpm install

ENV PORT 3000

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start" ]