const knex = require('knex')
const configurations = require('../knexfile.js')
const enviroment = process.env.NODE_ENV

module.exports = knex(configurations[enviroment])