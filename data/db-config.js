const knex = require('knex')
const configurations = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

module.exports = knex(configurations[env])
