// Update the following configuration according to your project needs

module.exports = {
    development: {
      client: 'sqlite3', // Database client
      connection: {
        filename: './dev.sqlite3' // Database file for SQLite
      },
      useNullAsDefault: true, // Required for SQLite
      migrations: {
        directory: './data/migrations', // Directory where migrations will be stored
      },
      seeds: {
        directory: './data/seeds', // Directory where seed files will be stored
      },
    },
  
    // You can also add configurations for other environments
    // production: { ... },
    // staging: { ... },
  };
  