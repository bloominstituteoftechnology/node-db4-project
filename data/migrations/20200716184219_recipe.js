
exports.up = function(knex) {
  return knex.schema
  .createTable('Recipes', tbl => {
    tbl.increments()
    tbl.text('RecipeName', 128).unique().notNullable()
  })

  .createTable('Ingredients', tbl => {
    tbl.increments()
    tbl.text('name', 128).unique().notNullable()
})

.createTable('Instructions', tbl => {
      tbl.increments()
      tbl.integer('Recipe_Id', 128).unsigned().notNullable().references('Recipes.id')
      tbl.integer('Step_Number').notNullable().unsigned()
      tbl.text('Step', 250).notNullable()
})

.createTable('RecipeServices', tbl => {
    tbl.integer('Ingredients_Id').notNullable().references('Ingredients.id')
    tbl.integer('Recipe_Id').notNullable().references('Recipes.Id')
    tbl.float('Quantity', 128).notNullable().unsigned()
})
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('RecipeServices')
    .dropTableIfExists('Instructions')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')
};
