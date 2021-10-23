module.exports = {
    development: {
        client: 'sqlite3',
        connection: {filename: './data/migrations'},
        seeds: {directory: './data/seeds'}
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done)
        }
    }
}