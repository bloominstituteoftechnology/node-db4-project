module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe-book.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },

    // necessary when we have foreign keys
    // enforces foreign keys in the database
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
};
