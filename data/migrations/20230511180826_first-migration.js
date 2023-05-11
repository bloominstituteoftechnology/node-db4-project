/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("recipe_name").notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("steps", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl.integer("step_number").notNullable();
      tbl.string("step_instructions").notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("step_id")
        .notNullable()
        .references("id")
        .inTable("steps");
      tbl.string("ingredient_name").notNullable();
      tbl.integer("quantity").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
