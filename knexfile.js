module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipes.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};