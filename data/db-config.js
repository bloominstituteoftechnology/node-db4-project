const knex = require('knex');

const config = require('../knexfile')
const kenv = process.env.NODE_ENV || 'development'


module.exports = knex(config[kenv]);