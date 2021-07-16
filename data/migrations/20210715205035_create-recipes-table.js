
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.text('recipe_name', 128)
                .unique()
                .notNullable()
            table.timestamp('created_at')
                .defaultTo(knex.fn.now())
        })

        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.text('ingredient_name', 200)
                .unique()
                .notNullable()
        })

        .createTable('steps', table => {
            table.increments('steps_id')
            table.integer('step_number')
                .unsigned()
                .notNullable()
            table.text('instructions', 300)
                .notNullable()
            table.integer('recipe_id')
                .unsigned()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
        })

        .createTable('steps_ingredients', table => {
            table.increments('steps_ingredients_id')
            table.integer('quantity')
            table.integer('ingredient_id')
                .unsigned()
                .references('ingredient_id')
                .inTable('ingredients')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
            table.integer('steps_id')
                .unsigned()
                .references('steps_id')
                .inTable('steps')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
        })

        
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
