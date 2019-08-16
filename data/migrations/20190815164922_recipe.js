exports.up = function(knex) {
 return knex.schema
  .createTable('recipe', tbl => {
   tbl.increments();
   tbl
    .text('name')
    .unique()
    .notNullable();
   tbl.timestamps(true, true);
  })
  .createTable('ingredients', tbl => {
   tbl.increments();
   tbl
    .text('ingredient_name')
    .unique()
    .notNullable();
   tbl.string('unit');
  })
  .createTable('recipe_ingredients', tbl => {
   tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
   tbl
    .integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('ingredients.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
   tbl.float('quantity');
   tbl.primary(['recipe_id', 'ingredient_id']);
  })
  .createTable('steps', tbl => {
   tbl.increments();
   tbl.integer('step_number').notNullable();
   tbl.text('description').notNullable();
   tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
 return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipe');
};
