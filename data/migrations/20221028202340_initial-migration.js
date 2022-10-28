/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipes_id')
        table.string('recipe_name').notNullable()
    })    
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.string('ingredient_name')
        table.string('ingredient_unit')
    })
    .createTable('steps', table => {
        table.increments('steps_id')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredients')
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
