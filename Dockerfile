FROM node:latest

RUN npm i -g markserv

WORKDIR /app

COPY . .

RUN ls

CMD markserv .