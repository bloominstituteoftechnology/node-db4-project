const knex = require('knex');
const config = require('../knexfile');
const Environment = process.env.NODE_ENV || de

module.exports = knex(config[Environment]);