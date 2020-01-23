exports.up = function (knex) {
    return (knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.string('name', 128).notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.string('name', 128);
        })
        .createTable('steps', table => {
            table.increments();
            table.integer('step_number')
                .notNullable()
                .unsigned();
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('recipes.id');
            table.text('Please add instructions', 128)
        })
        .createTable('recipe_ingredients', table => {
            table.increments();
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('recipes.id');
            table.integer('ingredient_id')
                .notNullable()
                .unsigned()
                .references('ingredients.id');
            table.float('ammount');
        })

    )
};

exports.down = function (knex) {
    return (knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingrdients')
        

    )
};