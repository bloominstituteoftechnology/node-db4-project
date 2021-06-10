exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 128).unique().notNullable();
      tbl.integer("ingredient_quantity").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("step_text", 128).notNullable();
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
    })
    .createTable("recipe_options", (tbl) => {
      tbl.increments("option_id");
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT");

      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_options")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
