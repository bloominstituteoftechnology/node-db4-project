exports.up = async function (knex) {
    await knex.schema.createTable('recipes', table => {
        table.increments();
        table.text('recipe_name')
            .notNullable()
            .unique()
    })

    await knex.schema.createTable('steps', table => {
        table.increments();
        table.integer('step_number')
            .unsigned()
            .notNullable()
        table.text('step_description')
            .notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })

    await knex.schema.createTable('ingredients', table => {
        table.increments();
        table.text('ingredient_name')
            .notNullable()
        table.float('quantity')
            .notNullable()
    })

    await knex.schema.createTable('recipes_ingredients', table => {
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('recipes')
};