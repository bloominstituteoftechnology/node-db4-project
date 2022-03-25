// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    migrations: { directory: "./data/migrations" },
    useNullAsDefault: true,
    connection: {
      filename: "./data/cook_book.db3",
    },
    seeds: { directory: "./data/seeds" },

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
