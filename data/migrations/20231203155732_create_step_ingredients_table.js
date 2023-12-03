/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('step_ingredients', table => {
        table.integer('step_id').unsigned().notNullable();
        table.foreign('step_id').references('step_id').inTable('steps');
        table.integer('ingredient_id').unsigned().notNullable();
        table.foreign('ingredient_id').references('ingredient_id').inTable('ingredients');
        table.float('quantity').notNullable();
        table.primary(['step_id', 'ingredient_id']); // Composite primary key
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('step_ingredients');

};
