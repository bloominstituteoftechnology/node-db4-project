
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('recipes', tbl => {
        tbl.increments('recipe_id');

        tbl.string('recipe_name', 255).notNullable()
      })
      .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');

        tbl.string('ingredient_name', 255).notNullable();
      })
      .createTable('instructions', tbl => {
        tbl.increments('instructions_id');

        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipes.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('recipes_ingredients', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipes.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredients.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl.string('unit', 255)
          .notNullable();

        tbl.integer('ingredient_quantity')
          .notNullable();

        tbl.primary(['recipe_id', 'ingredient_id']);
      })
  )
};

exports.down = function(knex) {
  
  
};
