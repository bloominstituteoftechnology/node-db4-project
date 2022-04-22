const knex = require('knex')
const configuration = require('../knexfile')
const enviorment = process.env.NODE_ENV || 'development'

module.exports = knex(configuration[enviorment])