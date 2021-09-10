
exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 150).notNullable().unique()
            table.timestamps(true, true)
        })
        .createTable("steps", table => {
            table.increments('step_id')
            table.string('step_name', 150).notNullable()
            table.string('step_instructions', 250).notNullable()
            table.integer('step_number').notNullable()
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
            table.string('ingredient_name', 150)
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ingredient_id')
            table.decimal('quantity'),
            table.integer('ingredient_id')
                    .unsigned()
                    .notNullable()
                    .references('ingredient_id')
                    .inTable('ingredients')
                    .onDelete('RESTRICT')
                    .onUpdate('RESTRICT')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
