/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable("recipes", table => {
        table.increments("recipe_id")
        table.string("recipe_name", 200).notNullable().unique()
    })

    .createTable("ingredients", table => {
        table.increments("ingredient_id")
        table.string("ingredient_name", 200).notNullable().unique()
        table.string("ingredient_unit", 50)
    })

    .createTable("steps", table => {
        table.increments()
    })

    .createTable("steps_ingredients", table => {
        table.increments()
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists("steps_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
