const knex = require('knex') // oopsie
const configs = require('../knexfile')

// on Heroku, process.env.NODE_ENV will be 'production'
const env = process.env.NODE_ENV || 'development'

// we need [ ] when object prop is a variable
const config = configs[env]

module.exports = knex(config)