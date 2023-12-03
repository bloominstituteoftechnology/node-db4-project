const sharedConfig = {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' // Your specified database file
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations' // Your specified migrations directory
    },
    seeds: {
      directory: './data/seeds' // Your specified seeds directory
    },
    pool: {
      afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
    }
  };
  
  module.exports = {
    development: {
      ...sharedConfig
    },
    testing: {
      ...sharedConfig,
      connection: {
        filename: './dev.sqlite3' // Change this if you have a separate test database
      }
    },
    production: {
      ...sharedConfig,
      connection: {
        filename: './dev.sqlite3' // Change this for your production database settings
      }
    }
  };
  