const sharedConfig = {
    client: "sqlite3",
    migrations: { directory: "./data/migrations" },
    seeds: { directory: './data/seeds' },
    //sqlite3 stuff
    useNullAsDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foriegn_keys = ON', done) }, 
    }

module.exports = {
    development: {
        ...sharedConfig,
        connection: { filename:'./data/cook_book.db3'},
    },
testing: {
    ...sharedConfig,
    connection: { filename: './data/cook_book.test.db2'},
},

production: {

}
}
