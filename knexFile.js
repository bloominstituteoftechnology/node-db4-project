module.exports = {
    development: {
      client: 'sqlite3', // or your database client (e.g., postgres, mysql)
      connection: {
        filename: './dev.sqlite3', // Path to your database file
      },
      migrations: {
        directory: './data/migrations', // Directory where migration files are stored
      },
      seeds: {
        directory: './data/seeds', // Directory where seed files are stored
      },
    },
  
    production: {
      client: 'postgresql', // or your production database client
      connection: {
        connectionString: process.env.DATABASE_URL, // Connection URL or other config
        ssl: {
          rejectUnauthorized: false,
        },
      },
      migrations: {
        directory: './db/migrations',
      },
      seeds: {
        directory: './db/seeds',
      },
    },
  
    // You can add more environment configurations (e.g., testing) here
  };
  