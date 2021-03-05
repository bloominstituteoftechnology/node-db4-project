const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants");

exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.text('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number')
        .notNullable();
      tbl.integer('recipe_id')
        .notNullable()
        .references('recipe_id')
        .inTable('recipes');
      tbl.integer('ingredient_id')
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients');
      tbl.float('quantity')
        .notNullable();
      tbl.text('action', 128);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};
