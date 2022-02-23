const shareConfig = {
    client: 'sqlite3',
    migration: { directory: './data/migration' },
    seeds: { directory: './data/seeds' },
    useNullAsDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_key = ON', done) }
};

module.exports = {
    development: {
        ...shareConfig,
        connection: {
            filename: './data/cook_book.db3',
        },
        testing: {
            ...shareConfig,
            connection: { filename: './data/cook_book.test.db3' },
        },
        production: {}
    }
};
