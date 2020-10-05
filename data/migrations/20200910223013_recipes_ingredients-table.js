//* this file creates the table that references and links the recipes and ingredients tables *// 
exports.up = function(knex) {
  return knex.schema.createTable('recipes_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      tbl.integer('quantity')
        .unsigned()
        .notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes_ingredients');
};
