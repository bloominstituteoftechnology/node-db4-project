const knex = require('knex')
const settings = require('../knexfile')
const environment = process.env.NODE_ENV || "development";

module.exports = knex(settings[environment]);