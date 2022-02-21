// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    migrations: {
      directory: './data/migrations'
      },
    seeds: {
      directory: './data/seeds'
    },
    connection: {
      filename: './data/database.db3'
      },
    useNullAsDefault: true
    }
}
