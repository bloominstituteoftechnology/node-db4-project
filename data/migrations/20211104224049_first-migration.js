exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.text("recipe_name", 128).unique().notNullable();
      tbl.integer("created_at").notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.text("ingredient_name").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments("step_ingredients_id");
      tbl.decimal("quantity").notNullable();
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
