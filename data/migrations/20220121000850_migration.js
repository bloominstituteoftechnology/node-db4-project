
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.text('recipe_name', 128).notNullable().unique()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.text('step_instructions').notNullable().unique()
            table.integer('step_number')
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('ingredients', table => {
            table.increments('ing_id')
            table.text('ingredient_name').notNullable()
            table.text('ing_unit').notNullable()
        })
        .createTable('step_ingredient', table => {
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
            table.integer('ing_id')
                .unsigned()
                .notNullable()
                .references('ing_id')
                .inTable('ingredients')
            table.text('quantity').notNullable().unique()
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredient')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
