## Description

POC of a backend notification service using [Nest](https://github.com/nestjs/nest) and [PostgreSQL](https://www.postgresql.org/) for the database.
Using Apollo GraphQL for the API and Prisma for the ORM.

## Installation

```bash
$ yarn
```

## Running the docker container with the DB

On the root folder run to spin the docker container with the DB:

```bash
docker-compose up
```

## Runnig the migrations

```bash
npx prisma migrate dev

```

## Seed the DB with some data

```bash
npx prisma db seed

```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

```

### Access the app

```
aplication running on http://localhost:3000
playground running on http://localhost:3000/graphql
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
