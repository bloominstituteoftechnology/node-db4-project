exports.up = async function (knex) {
  await knex.schema
    .createTable("recipies", (table) => {
      table.increments("recipie_id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.string("recipie_name").notNullable().unique();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.string("step_instructions", 250).notNullable();
      table.integer("step_number").notNullable();
      table
        .integer("recipie_id")
        .unsigned()
        .notNullable()
        .references("recipie_id")
        .inTable("recipies");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.integer("quantity").unsigned();

      table.string("ingredient_name", 40).notNullable().unique();
    })
    .createTable("step_ingredients", (table) => {
      table.increments("step_ingredient_id");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipies");
};
