const knex = require('knex')
const settings = require('../knexfile')

const env = process.env.NODE_ENV || 'development'
const settingsToUse = settings[env]
const connection = knex(settingsToUse)

module.exports = connection
