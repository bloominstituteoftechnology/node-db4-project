
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipes_id')
            table.string('recipe_name', 128)
                .unique()
                .notNullable()

        })
        .createTable('steps', table => {
            table.increments('steps_id')
            table.integer('step_number')
                .unsigned()
                .notNullable()

        })
        .createTable('instructions', table => {
            table.increments('instructions_id')
            table.text('instruction_name')
                .unique()
                .notNullable()

        })
        .createTable('ingredients', table => {
            table.increments('ingredients_id')
            table.string('ingredient_name', 128)
                .unique()
                .notNullable()

        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
