docker-compose.yml

```yml
version: "3.1"
services:
  frontend:
    build:
      dockerfile: ./docker/frontend.Dockerfile
      context: .
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    stdin_open: true
    command: yarn start
  backend:
    build:
      dockerfile: ./docker/backend.Dockerfile
      context: .
    ports:
      - "4000:4000"
    depends_on:
      - db
    environment:
      - DATABASE_HOST=db
    volumes:
      - ./backend:/app
      - /app/node_modules
    command: yarn start
  storybook:
    build:
      dockerfile: ./docker/frontend.Dockerfile
      context: .
    ports:
      - "9009:9009"
    command: yarn storybook
  db:
    environment:
      MYSQL_ROOT_PASSWORD: "123"
      MYSQL_DATABASE: zoomevents
    volumes:
      - $HOME/docker/volumes/zoomevents/mysql/:/var/lib/mysql/
    image: mysql:5.7
    ports:
      - "3306:3306"
    healthcheck:
      test: mysqladmin ping -h 127.0.0.1 -u root --password=123
    command: --default-authentication-plugin=mysql_native_password
```

docker/frontend.yml

```yml
FROM node:latest

WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/yarn.lock .
RUN yarn

COPY ./frontend .

CMD yarn start
```

docker/backend.yml

```yml
FROM node:latest

WORKDIR /app
COPY ./backend/package.json .
COPY ./backend/yarn.lock .
RUN yarn

COPY ./backend .

RUN yarn build

CMD yarn start
```
