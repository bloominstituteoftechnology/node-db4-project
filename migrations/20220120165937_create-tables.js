
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe', table => {
    table.increments('recipe_id');
    table.string('recipe_name').notNullable().unique();
  })
  .createTable('step', table => {
    table.increments('step_id');
    table.string('step_instructions').notNullable();
  })
  .createTable('ingredient', table => {
    table.increments('ingredients_id');
    table.string('ingredients_name').notNullable().unique();
  })
  .createTable('recipe_step_ingredient', table => {
    table.increments('recipe_step_ingredient_id');
    table.string('quantity').notNullable();
    table.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipe')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
    table.integer('step_id')
    .unsigned()
    .notNullable()
    .references('step_id')
    .inTable('step')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
    table.integer('ingredients_id')
    .unsigned()
    .notNullable()
    .references('ingredients_id')
    .inTable('ingredient')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_step_ingredient')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('step')
  .dropTableIfExists('recipe')
};
