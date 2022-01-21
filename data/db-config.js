const knex = require('knex');

const config = require('../knexfile.js');

const development = process.env.NODE_ENV

module.exports = knex(config.development);