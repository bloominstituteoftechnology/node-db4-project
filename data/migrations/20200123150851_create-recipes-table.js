exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();

      tbl.string("description", 255).notNullable();
    })

    .createTable("steps", tbl => {
      tbl.increments();

      tbl.string("instructions", 255);
      tbl.integer("step_number");

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("ingredients_recipes", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.float("quantities").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredients_recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};



