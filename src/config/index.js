const dotenv = require('dotenv');

dotenv.config();

const BUILD_ENV = process.env.BUILD_ENV || 'none';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

module.exports = {
  global: {
    env: BUILD_ENV,
    port: SERVER_PORT,
  },
};
