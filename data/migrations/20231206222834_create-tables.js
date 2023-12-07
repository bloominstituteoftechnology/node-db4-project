/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ing_id");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
    })
    .createTable("steps_ingredients", (tbl) => {
      tbl.increments("step_ing_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema;
};
