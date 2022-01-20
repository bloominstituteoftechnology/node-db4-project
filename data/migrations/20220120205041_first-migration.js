exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.text("recipe_name").notNullable().unique();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.text("ingredient_name").notNullable().unique();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.text("step_instructions").notNullable();
      table.integer("step_number");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("steps_ingredients", (table) => {
      table.increments("step_ingredient_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table.integer("quantity").notNullable();
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
