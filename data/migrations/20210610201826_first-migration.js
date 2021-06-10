exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table  => {
        table.increments('recipe_id')
        table.string('recipe_name', 138).notNullable()
        table.string('created_at', 40).notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 138).notNullable().unique()
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.string('step_text', 250).notNullable()
        table.integer('step_number').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') 
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredient_id')
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.string('ingredient_quantity')
            .unsigned()
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
