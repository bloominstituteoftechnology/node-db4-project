/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipes.db3'
    }
  },
  migrations: {
    directroy: './data/migrations'
  },
  seeds: {
    directroy: './data/seeds'
  },
  pool: {
    afterCreate:(conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    }
  }

};
