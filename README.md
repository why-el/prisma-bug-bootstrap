# C'est quoi ca?

This is a simple repo that setups up Prisma so that you can confirm something about it, like how a command works, or whether is has a bug somewhere, and so on. For instance, in `index.ts`, we show a bug with `deleteMany` (it deletes records when the `notIn` predicate for the `where` clause for an attribute is undefined or an empty array). Change that code or the `schema.prisma` file to test anything you want.

## Setup

run:

- `npm install`

then create the local db. Depending on how you installed Postgres, you need to create a DB and set said DB's url in `.env`. For instance, Run:

`createdb removeMe`

obviously, if you used this repo before, remove this DB to reset it.

then set this in your local `.env` file: 

`echo DATABASE_URL=postgresql://postgres@localhost:5432/removeMe > .env`

then run:

run migrations: 

`npx prisma migrate dev`

and finally generate your client: 

`npx prisma generate`

and run your script: `npx ts-node index.ts`

## Cleanup

Once done with your experiments, nuke the DB:

`dropdb removeMe`
