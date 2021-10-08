 const knex = require('knex')
 const configurations = require('../knexfile.js')
 const enviorment = process.env.NODE_ENV

 module.exports = knex (configurations[enviorment])