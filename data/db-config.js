const knex = require("knex")

const knexfile = require("../knexfile.js")

const environment = process.env.DB_ENV || "development"

const db = knex(knexfile[environment])

module.exports = db;