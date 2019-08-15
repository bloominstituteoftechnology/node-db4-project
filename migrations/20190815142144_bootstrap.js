exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.float("quantity");
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      // foreign key
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      // foreign key
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("ingredient_quantity").notNullable();
    })
    .createTable("recipe_instructions", tbl => {
      tbl.increments();
      // foreign key
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      // foreign key
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
