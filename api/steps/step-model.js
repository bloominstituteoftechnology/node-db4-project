const db = require('../../data/db-config.js');

module.exports = {
  find,
  findById,
  update,
  remove,
};

function find() {
  return db('steps');
}

function findById(id) {
  return db('steps')
    .where('id', id)
    .first()
    .then(step => {
      if (step) {
        return step;
      } else {
        return null;
      }
    });
}

function update(id, changes) {
  return db('steps')
    .where('id', id)
    .update(changes)
    .then(successFlag => (successFlag > 0 ? this.findById(id) : null));
}

function remove(id) {
  return !findById(id)
    ? null
    : db('steps')
        .where('id', id)
        .del();
}
