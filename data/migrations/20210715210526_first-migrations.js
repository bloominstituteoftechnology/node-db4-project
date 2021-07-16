exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 350).notNullable().unique();
      table.string("timestamp").defaultTo(knex.fn.now());
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 200).notNullable();
    })
    .createTable("recipe_ingredients", (table) => {
      table.increments("recipe_ingredients_id");
      table.integer("recipe_id").unsigned().notNullable().references("recipe_id").inTable("recipes").onDelete("RESTRICT").onUpdate("RESTRICT");
      table.integer("ingredient_id").unsigned().notNullable().references("ingredient_id").inTable("ingredients").onDelete("RESTRICT").onUpdate("RESTRICT");
      table.string("ingredient_quantity").notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").notNullable();
      table.string("step_name").notNullable();
      table.string("step_instructions").notNullable();
      table.integer("recipe_id").unsigned().notNullable().references("recipe_id").inTable("recipes").onDelete("RESTRICT").onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("steps").dropTableIfExists("recipe_ingredients").dropTableIfExists("ingredients").dropTableIfExists("recipes");
};
