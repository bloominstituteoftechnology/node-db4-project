const configs = {
    client: 'sqlite3',
    migrations: { directory: './DATA/MIGRATIONS' },
    seeds: { directory: './DATA/SEEDS' },
    useNullAsDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)},
}

module.exports = {
    development: {
        ...configs,
        connection: { filename: './DATA/cook_book.db3' },
    },
    testing: {
        ...configs,
        connection: { filename: './DATA/cook_book.test.db3'}
    },
    production: {},
}