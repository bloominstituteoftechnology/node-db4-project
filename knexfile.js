module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, //SQLite
      connection: {
        filename: './data/zoos.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      pool: { //Allows SQLite Foreign Keys
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
      },
    },
  };