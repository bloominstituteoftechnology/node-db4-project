// this allows us to use knex to communicate with our db
const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);