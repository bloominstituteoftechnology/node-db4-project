// Update with your config settings.

module.exports = {
  client: "sqlite3",
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
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
