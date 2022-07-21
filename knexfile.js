module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipes.db'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
