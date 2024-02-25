FROM node:20.11.1-alpine as build

WORKDIR /workspace

COPY ./public /workspace/public
COPY ./src /workspace/src
COPY package.json /workspace

RUN npm install

CMD ["npm", "start"]

# React Runs on Port 3000
EXPOSE 3000