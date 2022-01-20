
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes')
    .createTable('ingredients')
    .createTable('instructions')
    .createTable('ingredients_step')
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('ingredients_step')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
