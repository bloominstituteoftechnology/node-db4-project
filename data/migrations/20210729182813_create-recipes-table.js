exports.up = async function(knex) {
    await knex.schema
    .createTable('recipes', table => {
         table.increments('recipe_id')
            .unique()
        table.text('recipe_name')
                .notNullable()
})


.createTable('steps', table => {
    table.increments('step_id')
    table.integer('step_number')
             .unsigned()
            .notNullable()
    table.text('instructions')
        .notNullable()
    table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
})


.createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.text('ingredient_name')
                .notNullable()
})


.createTable('recipe_ingredients', table => {
            table.increments('recipe_ingredients_id')
            table.integer('step_id')
                .unsigned()
                .notNullable()

                .references('step_id')
                .inTable('steps')

                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')   

            table.integer('ingredient_id')
                .unsigned()
                .notNullable()

                .references('ingredient_id')
                .inTable('ingredients')

                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')  

            table.text('quantity')  
})
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};