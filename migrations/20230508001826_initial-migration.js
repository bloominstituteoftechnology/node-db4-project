/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128)
            .notNullable()
            .unique()

    })
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.string('ingredients_name',128)
            .notNullable()
            .unique()
        table.string('ingredients_unit',50)
    })
    .createTable('steps', table => {
        table.increments('steps_id')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredients_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
