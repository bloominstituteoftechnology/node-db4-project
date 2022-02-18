exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("quantities", (tbl) => {
      tbl.increments("quantity_id");
      tbl.integer("quantity", 2).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.text("ingredient_name").notNullable();
    })
    .createTable("recipies", (tbl) => {
      tbl.increments("recipe_id");
      tbl.text("recipe_name").unique().notNullable();
      tbl.timestamps(false, true);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.text("step_instructions").notNullable();
      tbl
        .integer("ingredients")
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("quantity")
        .unsigned()
        .references("quantity_id")
        .inTable("quantities")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("recipe")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipies")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("quantities");
};
