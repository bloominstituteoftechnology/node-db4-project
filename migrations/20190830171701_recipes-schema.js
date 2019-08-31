
exports.up = function(knex) {
  return knex.schema.createTable(
      'recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name').unique().notNullable();
      tbl.integer('instructions_id').unique().notNullable();
      }
  )
  .createTable(
      'ingredients', tbl => {
          tbl.increments();
          tbl.string('ingredients_name').unique().notNullable();
          tbl.integer('ingredients_price');
      }
  )
  .createTable(
      'food_items', tbl => {
          tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
          tbl.integer('ingredients_id').unsigned().notNullable().references('id').inTable('ingredients');
          tbl.primary(['recipe_id', 'ingredients_id'])
      }
  )
  .createTable(
      'instructions', tbl => {
          tbl.increments();
          tbl.integer('recipe_id').unique().notNullable();
          tbl.string('description').unique().notNullable();
      }
  )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food-items')
  .dropTableIfExists('instructions')
  .dropTableIfExists('food_items')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');

  }