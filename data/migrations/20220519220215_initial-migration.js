/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 200).notNullable().unique()
    })

    .createTable('ingredients', tbl => {
        tbl.increments('ingredients')
        table.string('ingredients_name', 200).notNullable().unique()
        table.string('ingredients_unit', 50)
    })

    .createTable('steps', tbl => {
        tbl.increments()
    })

    .createTable('step_ingredients', tbl => {
        tbl.increments()
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
