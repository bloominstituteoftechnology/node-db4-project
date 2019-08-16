const db = require('../data/db-config');

module.exports = {
 find,
 add,
 findById,
};

function find() {
 return db('recipe');
}

function findById(id) {
 return db('recipe').where({ id });
}

async function add(info) {
 const [id] = await db('recipe').insert(info);
 return id;
}
