/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments('recipe_id'); // Primary key
        table.string('recipe_name').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    }); // Added missing closing parenthesis here
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
};
