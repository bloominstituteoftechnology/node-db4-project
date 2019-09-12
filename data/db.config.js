const knex = require("knex");

const knexFile = require("../knexfile.js");

const knexConfig = knexFile.development;

module.exports = knex(knexConfig);
