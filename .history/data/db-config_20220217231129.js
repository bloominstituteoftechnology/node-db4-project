const knex = require('knex');

const config = require('../knexfile');

const 
module.exports = knex(config.development);