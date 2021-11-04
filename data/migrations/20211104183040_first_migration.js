
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 128).notNullable().unique()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number').notNullable()
            table.string('step_instructions', 128).notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('restrict')
                .onUpdate('restrict')
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 128).notNullable()
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('restrict')
                .onUpdate('restrict')
        })
        .createTable('quantities', table => {
            table.increments('quantity_id')
            table.integer('quantity_amount').notNullable()
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('restrict')
                .onUpdate('restrict')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('quantities')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
