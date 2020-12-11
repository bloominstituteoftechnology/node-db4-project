
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).notNullable()
        table.integer('recipe_id')
        .unsigned().notNullable()
        .references('recipe_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.string('step_text', 128).notNullable()
        table.integer('step_number').unsigned().notNullable()
        table.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('steps_ingredients', table => {
        table.increments('id')
        table.integer('ingredient_id')
            .unsigned().notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.string('quantity', 128).notNullable()
        table.integer('step_id')
            .unsigned().notNullable()
            .references('step_id').inTable('steps')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
