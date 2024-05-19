// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate:( conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
      },
    },
    useNullAsDefault: true,
  },



};
