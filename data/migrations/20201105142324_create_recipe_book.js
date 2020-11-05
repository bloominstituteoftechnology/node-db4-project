exports.up = function (knex) {
  return knex.schema
    .createTable("recipe_books", (tbl) => {
      tbl.increments();
      tbl.string("recipe_book_title", 128).notNullable();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_title", 128).notNullable();
      tbl.string("instructions", 1024).notNullable();
      tbl
        .integer("recipe_book_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe_books")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl.string("amount", 128).notNullable();
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
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("recipe_books");
};
