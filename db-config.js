const knex = require('knex')
const enviornment = process.env.NODE.ENV
const configurations  = require('./knexfile')

module.exports = knex(configurations[enviornment])

