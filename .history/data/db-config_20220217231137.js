const knex = require('knex');

const config = require('../knexfile');

const Environment = require
module.exports = knex(config.development);