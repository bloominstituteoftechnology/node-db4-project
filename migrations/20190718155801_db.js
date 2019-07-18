exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", function(table) {
      table.increments();
      table
        .text("recipeName")
        .unique()
        .notNullable();
      table.text("instruction").notNullable();
    })
    .createTable("ingredients", function(table) {
      table.increments();
      table
        .text("ingredientName")
        .unique()
        .notNullable();
    })
    .createTable("recipes_ingredients", function(table) {
      table.increments();
      table
        .integer("recipeID")
        .references("id")
        .inTable("recipies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredientID")
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("recipes_ingredients")
    .dropTable("ingredients")
    .dropTable("recipes");
};
