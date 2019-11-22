const db = require('./../data/db-config.js');

function find() {
  return db('recipes');
}

module.exports = {
  find
}
