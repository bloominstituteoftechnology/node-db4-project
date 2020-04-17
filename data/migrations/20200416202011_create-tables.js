
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable().unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredients_name', 128).notNullable().unique();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments()
            tbl.integer('recipeId').unsigned().notNullable().references(recipes.id)
            tbl.integer('ingredientsId').unsigned().notNullable().references(ingredients.id)
            tbl.float('quantity').unsigned().notNullable()
            tbl.text('unit')
        })
        .createTable('instructions', tbl => {
            tbl.increments()
            tbl.integer('recipeId').unsigned().notNullable().references('recipes.id')
            tbl.text('instructions').notNullable()
            tbl.integer('step_number').unsigned().notNullable()
        })
        .createTable('', tbl => {
            
        })
     )
};

exports.down = function(knex) {
    return(
        knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
    )
};
