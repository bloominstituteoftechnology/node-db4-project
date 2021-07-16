module.exports = {
    development: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./data/recipes.db3",
      },
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
      pool: {
        afterCreate: (conn, done) => {
          // enable foreign keys in SQLite
          conn.run("PRAGMA foreign_keys = ON", done); // by turning on foreign_key enforcement
        },
      },
    },
  };