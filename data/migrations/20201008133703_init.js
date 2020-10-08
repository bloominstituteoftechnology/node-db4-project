exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments();
      table.string("name").notNullable();
    })
    .createTable("instructions", (table) => {
      table.increments();
      table.text("instructions");
      table.float("amount");
      table
        .integer("recipe_id")
        .unsigned()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (table) => {
        table.increments();
        table.string("name").notNullable();
      })
    .createTable("ingredients_list", (table) => {
      table.increments();
      table
        .integer("instruction_id")
        .unsigned()
        .references("instructions.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropIfTableExists("ingredients_list")
    .dropIfTableExists("ingredients")
    .dropIfTableExists("instructions")
    .dropIfTableExists("recipes");
};
