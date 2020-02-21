exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("title", 128)
        .notNullable()
        .unique();

      tbl.string("description", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("steps", tbl => {
      tbl.increments();

      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();

      tbl.string("instruction", 255).notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.string("units", 128).notNullable();

      tbl.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
