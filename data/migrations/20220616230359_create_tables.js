/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl
        .increments();
      tbl
        .varchar('recipe_name')
        .notNullable();
      tbl
        .timestamps(true, true);
    })
    .createTable('steps', tbl => {
      tbl
        .increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      tbl
        .integer('step_number')
        .notNullable();
      tbl
        .varchar('step_instructions');
    })
    .createTable('ingredients', tbl => {
      tbl
        .increments();  
      tbl
        .varchar('ingredient_name')
        .notNullable();
    })
    .createTable('amounts', tbl => {
      tbl
        .increments();
      tbl
        .integer('step_id')
        .notNullable()
        .references('id')
        .inTable('steps');
      tbl
        .integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients');
      tbl
        .float('amount')
        .notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('amounts')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
