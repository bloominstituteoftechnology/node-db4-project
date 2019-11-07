const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    remove,
    update
  };

  function find() {
    return db.select('*').from('recipes')
}
  