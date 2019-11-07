
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 128)
    })
    .createTable('ingredients', table => {
        table.increments()
        table.string('ingredient_name', 128)
    })
    .createTable('recipes_and_ingredients', table => {
        table.increments()
        table.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        table.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
