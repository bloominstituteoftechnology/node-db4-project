const config = require('../knexfile')[environment];
const environment = process.env.NODE_ENV || 'development';

module.exports = require('knex')(config);