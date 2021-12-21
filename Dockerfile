FROM node:16-alpine

WORKDIR /usr/src/app
COPY . ./

RUN yarn global add serve
RUN yarn
RUN yarn build
RUN rm -rf src

EXPOSE 4001

CMD ["serve", "-s", "build", "-l", "4001"]