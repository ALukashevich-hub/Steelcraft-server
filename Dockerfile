# develop stage
FROM node:11-alpine as develop-stage
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
WORKDIR /server/src
CMD [ "node", "index.js" ]