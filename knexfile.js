const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
        directory: './data/migrations'
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
        }
    }
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: {
            filename: './data/cook-book.db'
        },
        testing: {
            ...sharedConfig,
            connection: {
                filename: './data/cook-book-test.db'
            }
        },
        production: {}
    }
}
