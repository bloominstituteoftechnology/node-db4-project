const db = require('../data/db-config');

module.exports = {
 find,
 add,
};

function find() {
 return db('recipe');
}

async function add(info) {
 const [id] = await db('recipe').insert(info);
 return id;
}
