const Knex = require("knex");
const config = require("../knexfile.js");

module.exports = Knex(config.development);