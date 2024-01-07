const knex = require('knex')
const configurations = require('../../node-db4-project/knexfile')
const environment = process.env.NODE_ENV

module.exports = knex(configurations[environment])