
exports.up = function(knex) {
  return knex.schema.createTable("Recipes", tbl => {
      tbl.increments()
      tbl.string("Recipe", 128).notNullable()
  })
  .createTable("Ingredients", tbl => {
    tbl.increments()
    tbl.string("Ingredient", 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Ingredients")
    .dropTableIfExists("Recipes")
};
