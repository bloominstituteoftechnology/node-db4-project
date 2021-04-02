
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable()
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number').notNullable()
      tbl.string('step_instructions', 256).notNullable()
      tbl.integer('recipe_id')
        .unsigned()  
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name', 128).notNullable()
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('step_ingredients_id')
      tbl.string('quantity', 128)
      tbl.integer('step_id')
        .unsigned()  
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()  
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_ingredients')
};
