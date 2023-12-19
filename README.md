/

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

# welcome to Flights Service

## Project SetUp

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
