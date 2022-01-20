
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe', table => {
    table.increments('recipe_id');
    table.string('recipe_name').notNullable().unique();
  })
  .createTable('ingredient', table => {
    table.increments('ingredient_id');
    table.string('ingredient_name').notNullable().unique();
    table.string('ingredient_unit');
  })
  .createTable('step', table => {
    table.increments('step_id');
    table.string('step_instructions').notNullable()
    table.integer('step_number').notNullable()
    table.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipe')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
  })
  .createTable('step_ingredient', table => {
    table.increments('step_ingredient_id');
    table.float('quantity').notNullable();
    table.integer('step_id')
    .unsigned()
    .notNullable()
    .references('step_id')
    .inTable('step')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
    table.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('ingredient_id')
    .inTable('ingredient')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredient')
  .dropTableIfExists('step')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe')
};
