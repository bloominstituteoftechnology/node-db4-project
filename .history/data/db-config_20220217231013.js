const knex = require('knex');

const config = require('./.);

module.exports = knex(config.development);