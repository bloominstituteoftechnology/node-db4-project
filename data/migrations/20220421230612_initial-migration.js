/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', tbl => {
    tbl.increments('recipe_id');
    tbl.text('recipe_name', 128).notNullable().unique();
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.text('ingredient_name', 128).notNullable().unique();
    tbl.text('ingredient_unit', 128).notNullable();
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id');
    tbl.text('step_text', 256).notNullable();
    tbl.integer('step_order')
      .notNullable()
      .unsigned()
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    })
  .createTable('step_ingredients', tbl => {
    tbl.increments('step_ingredient_id');
    tbl.float('quantity').notNullable();
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
