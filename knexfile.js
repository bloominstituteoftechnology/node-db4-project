const sharedconfig = {
    client: 'sqlite3',
    migrations: { directory: './migrations'},
    useNullAsDefault : true,
    pool: {afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)}
}

module.exports = {
    development: {
        ...sharedconfig,
        connection: {filename : './data/cook_book.db3'},
        seeds: {directory: './data/seeds'}
    }
}