const sharedconfig = {
    client: 'sqlite3',
    migration: { directory: './data/migrations'},
    useNullAsDefault : true,
    pool: {afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)}
}

module.exports = {
    development: {
        ...sharedconfig,
        connection: {filename : './data/cook_book.db3'},
    }
}