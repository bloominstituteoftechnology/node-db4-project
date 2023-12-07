/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ing_id");
      tbl.string("ing_name", 128).notNullable();
      tbl.string("ing_unit", 128);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("step_instructions", 128);
      tbl.integer("step_number").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE") //or .onDelete('RESTRICT')?
        .onUpdate("CASCADE"); //or .onUpdate('RESTRICT')?
    })
    .createTable("steps_ingredients", (tbl) => {
      tbl.increments("step_ing_id");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE") //or .onDelete('RESTRICT')?
        .onUpdate("CASCADE"); //or .onUpdate('RESTRICT')?
      tbl
        .integer("ing_id")
        .unsigned()
        .notNullable()
        .references("ing_id")
        .inTable("ingredients")
        .onDelete("CASCADE") //or .onDelete('RESTRICT')?
        .onUpdate("CASCADE"); //or .onUpdate('RESTRICT')?
      tbl.float("ing_quantity").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("steps_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
