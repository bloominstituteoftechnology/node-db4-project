/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable()
        table.string('units')
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number')
        table.string('step_instructions')
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })

    .createTable('ingredient_quantities', table => {
        table.increments('iq_id')
        table.string('quantity')
        table.float('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('ingredient_quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
