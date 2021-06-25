
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable()
      tbl.string('created_at', 128).notNullable()
  })
  .createTable("ingredients", tbl => {
      tbl.increments('ingredient_id')
      tbl.string("ingredient_name", 255)
  })
  .createTable("recipe_ingredients", tbl => {
      tbl.increments('recipe_ingredients_id')
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references("recipe_id")
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
      tbl.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
      tbl.string('quantity', 255).notNullable()
  })
  .createTable('instructions', tbl => {
      tbl.increments('instruction_id')
      tbl.string("instruction", 255).notNullable()
      tbl.integer('step_number')
      .unsigned()
      .notNullable()

      tbl.integer('recipe_id')
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
};

