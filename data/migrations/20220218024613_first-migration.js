exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.text('recipe_name', 128).notNullable().unique()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number').notNullable().unsigned()
            table.string('step_instructions').notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE') 
    
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.text('ingredient_name').notNullable().unique()
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
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
        })
    
};
    
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};