// Update with your config settings.
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = IN', done)
    },
  },
}


module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './recipes.sqlite3'
    }
  },

};
