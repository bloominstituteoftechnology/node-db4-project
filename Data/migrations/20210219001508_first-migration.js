exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 128).notNullable().unique();
      tbl.integer("ingredient_quanity");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.text("step_text").notNullable();
      tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
    })
    .createTable("recipeoptions", (tbl) => {
      tbl.increments("option_id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExist("recipeoptions")
    .dropTableIfExist("steps")
    .dropTableIfExist("ingredients")
    .dropTableIfExist("recipes");
};
