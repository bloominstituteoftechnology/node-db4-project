// Update with your config settings.

module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './dev.sqlite3'
      },
      
      migrations:{
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      },
      pool: { // needed to enable foreign keys in sqlite
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }}
      
    },
  };