const knex = require('knex')

const config = require('../knexfile').documents

module.exports = knex(config)

