const knex = require('knex');

const config = require('./db-config.js');

module.exports = knex(config.development);