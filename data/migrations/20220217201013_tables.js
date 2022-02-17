exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable().unique()
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name', 128).notNullable().unique()
      tbl.string('ingredient_unit', 100)
  })
  .createTable('steps', tbl => {
      tbl.increments('steps_id')
      tbl.string('step_text', 128).notNullable()
      tbl.intger('step_number').notNullable()
      tbl.intger('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
  })
  .createTable('step_ingredients', tbl => {
      tbl.increments('step_ingredient_id')
      tbl.float('quantity').notNullable()
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
