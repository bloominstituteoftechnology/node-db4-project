/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments();
    })
    .createTable("ingredients", (table) => {
      table.increments();
    })
    .createTable("steps", (table) => {
      table.increments();
    })
    .createTable("step_ingredients", (table) => {
      table.increments();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
