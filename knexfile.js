const development = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/recipe-book.db3'},
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // this enables foreign keys in SQLite
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  }
  
  module.exports = {
    development
  }
  