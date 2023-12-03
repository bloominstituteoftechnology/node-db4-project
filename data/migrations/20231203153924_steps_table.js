/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('steps', table => {
        table.increments('step_id'); // Primary key
        table.integer('recipe_id').unsigned().notNullable();
        table.foreign('recipe_id').references('recipe_id').inTable('recipes');
        table.integer('step_number').notNullable();
        table.text('step_instructions').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps');
};
