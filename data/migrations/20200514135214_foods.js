exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (recipes) => {
      // suppliers.uuid('id').primary();
      recipes.increments();

      recipes.string("name", 255).notNullable().unique();
    })
    .createTable("steps", (steps) => {
      steps.increments();
      steps.integer("step_number").notNullable();
      steps.string("instruction", 255).notNullable().unique();

      steps
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id") // or .references('clients.id') then remove .inTable()
        .inTable("recipes")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");
    })
    .createTable("recipes_ingredients", (recipes_ingredients) => {
      recipes_ingredients.increments();

      recipes_ingredients.varchar("quantity", 255).notNullable();

      recipes_ingredients
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      recipes_ingredients
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("ingredients", (ingredients) => {
      ingredients.increments();

      ingredients.string("name", 255).notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
