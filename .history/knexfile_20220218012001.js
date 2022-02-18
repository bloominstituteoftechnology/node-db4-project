module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/recipe_book.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		,
	},
	testing: {},
	production: {},
};
const sharedConfig = {
	client: 'sqlite3',
	useNullAsDefault: true,
	migrations: { directory: './data/migrations' },
	pool: {
		afterCreate: (conn, done) => {
			conn.run('PRAGMA foreign_keys = ON', done);
		},
	},
};
