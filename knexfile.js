const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  seed: { directory: "./data/seeds" },
  migrations: {
    directory: "data/migrations",
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/cook_book.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/cook_book.text.db3" },
  },
  production: {},
};
