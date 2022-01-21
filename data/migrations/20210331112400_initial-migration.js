
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 200).notNullable().unique()
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 200).notNullable().unique()
            table.string('ingredient_unit', 50)
        })
        .createTable('steps', table => {
            table.increments()
            table.string('step_text', 200).notNullable()
            table.integer('step_number').notNullable()
            table.integer('recipe_id')
                .unsigned()
                .references('recipe_id')
                .inTable('recipe')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ingredient_id')
            table.float('quantity').notNullable()
            table.integer('step_id')
                .unsigned()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('ingredient_id')
                .unsigned()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
}

exports.up = async function(knex) {
    await knex.schema
        .dropTableExists('step_ingredients')
        .dropTableExists('steps')
        .dropTableExists('ingredients')
        .dropTableExists('recipes')
}