FROM node:latest

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm install

EXPOSE $PORT

CMD ["npm", "run", "prod"]