exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
      // foreign keys
      tbl.integer("dish_id").unsigned();
      //   tbl.foreign("dish_id").references("dish_id").on("dishes");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredients_id");
      tbl.string("ingredients_name", 128).notNullable().unique();
      tbl.string("ingredient_unit", 50);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("step_text", 200).notNullable();
      tbl.integer("step_number").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      //   tbl.foreign("steps_id").references("steps_id").on("steps");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments("step_ingredient_id");
      tbl.float("quantity").notNullable();
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("steps_ingredients");
};
