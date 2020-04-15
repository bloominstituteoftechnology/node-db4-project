const db = require("./../data/db-config.js");

function getById(instruction_id) {
  return db("instructions").where({ id: instruction_id });
}

function add(instruction) {
  return db("instructions").insert(instruction);
}

function remove(instruction_id) {
  return db("instructions").where({ id: instruction_id }).del();
}

module.exports = {
  getById,
  add,
  remove,
};
