// recipes, ingredients, steps
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("name").notNull()
  })
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.text("name").notNull()
    table.text("quantity").notNull()
  })
  await knex.schema.createTable("recipes_ingredients", (table) => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
    table.primary(["recipe_id", "ingredient_id"])
  })
  await knex.schema.createTable("steps", (table) => {
    table.increments("id")
    table.text("instruction").notNull()
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
}
