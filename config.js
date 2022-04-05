const dotenv = require('dotenv');
const result = dotenv.config()

if (result.error) {
  throw result.error
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,d
}