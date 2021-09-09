const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  }, // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  production: {
    ...sharedConfig,
    connection: () => (
      {
        filename: process.env.SQLITE_FILENAME
          || './data/prod.db3'
      }
    )
  },
  development: {
    ...sharedConfig,
    connection: {filename: './data/dev.db3'},
  },
  testing: {
    ...sharedConfig,
    connection: {filename: './data/test.db3'},
  },
}
