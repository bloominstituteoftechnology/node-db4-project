// Update with your config settings.
const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations'},
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done); 
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/recipe.db3' },
    seeds: { directory: './data/seeds' },
  },  

};
