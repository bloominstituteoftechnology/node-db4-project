exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.text("recipe_name", 128).notNullable().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name", 128).notNullable().unique();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id");
      tbl.float("quantity").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
      tbl.integer("step_num").notNullable();
      tbl.text("instructions", 256).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
