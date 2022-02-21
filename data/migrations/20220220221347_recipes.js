/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128)
      tbl.timestamp('created_at')
    //   tbl.integer('steps').unsigned().notNullable()
    //   .references('step_id').inTable('steps')
    //   .onUpdate('CASCADE')
    //   .onDelete('CASCADE')
  })
  .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('steps_number').unsigned().notNullable().unique()
      tbl.string('step_instructions').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name').notNullable().unique()
  })
  .createTable('steps_ingredients', tbl => {
      tbl.increments('steps_ingredients_id')
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('quantity').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
