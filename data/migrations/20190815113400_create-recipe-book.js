exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
      tbl.text('instructions', 256)
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128);
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipes.id');
      tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('ingredients.id');
      tbl.float('quantity');
    })
  )  
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
  )
};
