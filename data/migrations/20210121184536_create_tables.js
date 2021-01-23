exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable().unique();
      tbl.string("description", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();

      tbl.string("ingredient_name", 128).notNullable().unique();
    })
    .createTable("measurement_units", (tbl) => {
      tbl.increments();

      tbl.string("measurement_description", 128).notNullable();
    })
    .createTable("measurement_qty", (tbl) => {
      tbl.increments();
      tbl.float("qty_amount");
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT");
      tbl
        .integer("measurement_qty_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("measurement_qty")
        .onDelete("RESTRICT");
      tbl
        .integer("measurement_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("measurement_units")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("measurement_qty")
    .dropTableIfExists("measurement_units")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
