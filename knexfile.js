module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipies.db3",
    },
    useNullAsDefault: true, //do you want to use null as your default?
    migrations: { //where do you want your migrations going?
      directory: "./data/migrations",
    },
    seeds: { //where do you want your seed files going?
      directory: "./data/seeds",
    },
    pool: { //preserves referencial integrity
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
