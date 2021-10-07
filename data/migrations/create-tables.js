exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 255).unique().notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments("quantity_id");
      tbl.string("quantity").notNullable();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name").notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
