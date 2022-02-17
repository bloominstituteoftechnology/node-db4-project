const knex = require('knex');

const config = require('../knexfile');

const Environment = process
module.exports = knex(config.development);