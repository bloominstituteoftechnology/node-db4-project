
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable()
        table.timestamp('post_time').defaultTo(knex.fn.now());
    })
    .createTable('steps', table => {
        table.increments('steps_id')
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.integer('step_number').notNullable()
        table.string('step_instructions').notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.string('ingredient_name')
        table.string('quantity')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredients_id')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
