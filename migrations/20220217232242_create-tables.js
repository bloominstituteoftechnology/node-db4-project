
exports.up = async function(knex) {
  await knex.schema
  .createTable()
  .createTable()
  .createTable()
  .createTable()
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
