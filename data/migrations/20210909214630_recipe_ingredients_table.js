exports.up = function (knex) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.integer('recipe_id')
      .unsigned()
      .index()
      .references('recipe_id')
      .inTable('recipes')
    table.integer('ingredient_id')
      .unsigned()
      .index()
      .references('ingredient_id')
      .inTable('ingredients')
    table.integer('quantity')
      .notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
}
