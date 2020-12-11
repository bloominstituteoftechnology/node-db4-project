// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipes.db3'//CHANGE TO YOUR DB3 FILE 
    },
    useNullAsDefault: true,

    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },

    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  }
};
