
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 128)
                .unique()
                .notNullable()

        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number')
                .unsigned()
                .notNullable()
            table.text('instruction_name')
                .notNullable()
        })
        // .createTable('instructions', table => {
        //     table.increments('instruction_id')
        //     table.text('instruction_name')
        //         .unique()
        //         .notNullable()

        // })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 128)
                .unique()
                .notNullable()

        })
        .createTable('recipe_ingredients', table => {
            table.increments('recipe_ingredients_id')
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references("recipe_id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT")            
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references("ingredient_id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT")    
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        // .dropTableIfExists('instructions')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
