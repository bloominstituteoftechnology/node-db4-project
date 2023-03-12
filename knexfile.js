const sharedconfig = {
    client:`sqlite3`,
    usenullAsDefault:true,
    migrations: { directory: `./data/migrations` },
    pool: { afterCreate: (conn, done) => conn.run(`PRAGMA foreign_keys = ON`,done) }
}

module.exports = {
    development: {
        ...sharedconfig,
        connection: {filename:`./data/cook_book.db3`},
        seeds: {directory:`./data/seeds`}
    },
    testing: {
        ...sharedconfig,
        connection: {filename:`./data/cook_book.test.db3`},
    }
}