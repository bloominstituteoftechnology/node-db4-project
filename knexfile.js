const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done), },
    seeds: { directory: './data/seeds'}
}

module.exports= {
    development: {
        ...sharedConfig,
        connection: { filename: './data/how_to.db3' },
    },

    testing: {
        ...sharedConfig,
        connection: { filename: './data/how_to.test.db3'}
    },
    production: {}
}