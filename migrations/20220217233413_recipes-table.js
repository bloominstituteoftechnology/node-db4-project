exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).unique().notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.string("step_instructions", 256).unique().notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredients_id");
      tbl.string("ingredients_name", 128).notNullable();
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT");
    })
    .createTable("ingredient_quantity", (tbl) => {
      tbl.increments("ingredient_quantity_id");
      tbl.float("quantity").notNullable();
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredient_quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
