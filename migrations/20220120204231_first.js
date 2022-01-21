
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes',table => {
        table.increments('recipe_id')
        table.text('recipe_name',128).notNullable().unique()
    })
    .createTable('ingredients',table => {
        table.increments('ingredient_id')
        table.text('ingredient_name',256).notNullable().unique()
    })
    .createTable('steps',table => {
        table.increments('step_id')
        table.text('step_instructions',256).notNullable()
        table.integer('step_number')
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })
    .createTable('steps_ingredients',table => {
        table.increments('steps_ingredients_id')
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
            
        table.integer('quantity')

        
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
