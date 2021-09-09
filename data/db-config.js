const knex = require("knex")
const { development } = require("../knexfile")

module.exports = knex(development)