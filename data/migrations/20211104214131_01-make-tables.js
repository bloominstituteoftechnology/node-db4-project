
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
    })
    .createTable('recipe_steps', table => {
        table.increments('step_id')
    })
    .createTable('step_ingredients', table => {
        table.increments('ingredient_id')
    })
    .createTable('ingredients_quantity', table => {
        table.increments('quantity_id')
    })
    
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('ingredients_quantity')
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('recipes')
};
