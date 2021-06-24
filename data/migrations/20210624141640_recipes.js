exports.up = function (knex) {
  return knex.schema
    .createTable("categories", (tbl) => {
      tbl.increments("category_id");
      tbl.string("category_name").notNullable().unique();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name").notNullable().unique();
      tbl
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("category_id")
        .inTable("categories")
        .onDelete("RESTRICT");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.string("step_instructions", 128).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 128).notNullable().unique();
    })
    .createTable("ingredients_steps_by_recipe", (tbl) => {
      tbl.increments("ingredients_steps_by_recipe");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("steps_id")
        .inTable("steps")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
      tbl.decimal("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients_steps_by_recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("categories");
};
