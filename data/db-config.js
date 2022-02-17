const knex = require('knex')
const configs = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

const configToUse = configs[env]

module.exports = knex(configToUse)