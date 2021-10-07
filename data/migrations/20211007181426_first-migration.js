
exports.up = async function (knex) {
    await knex.schema.createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable().unique()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })

    await knex.schema.createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instructions').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipe_id')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
    })

    await knex.schema.createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable()
    })

    await knex.schema.createTable('steps_ingredients', table => {
        table.increments('steps_ingredients_id')
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
        table.decimal('quantity_oz').notNullable()
    })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
