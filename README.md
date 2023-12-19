<!---

- src/
  index.js // server
  models/
  controllers/
  middlewares/
  services/
  utils/
  config/
  repository/
  -tests/ [later]
  -static/
  -temp/
<<<<<<< HEAD
  --->

# Welcome to Flights Service

## Project Setup

=======

# welcome to Flights Service

## Project SetUp

> > > > > > > 2f5aeb3cbead9dd37912e6ea17cce99c631d98a1

- Clone the project on your local
- Execute `npm install`on the same path as your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT = 3000`
- Inside the `src/config` folder create a new `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSOW0RD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
