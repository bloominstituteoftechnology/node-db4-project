
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
      tbl.string('instructions').notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
  })
  .createTable('recipe_book', tbl => {
      tbl.increments();
      tbl.float('quantity').notNullable();
      tbl.string('measurement');
      // foreign key that points to recipe table
      tbl.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      // foreign key that points to ingredients table
      tbl.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  // can't take off your socks without taking off your shoes...put the tables backward
  return knex.schema
    .dropTableIfExists("recipe_book")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
