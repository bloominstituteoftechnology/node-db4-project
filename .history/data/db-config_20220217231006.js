const knex = require('knex');

const config = require('..js');

module.exports = knex(config.development);