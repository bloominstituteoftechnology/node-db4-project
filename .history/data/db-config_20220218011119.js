const knex = require('knex');
const config = require('../');
const Environment = process.env.NODE_ENV

module.exports = knex(config[Environment]);