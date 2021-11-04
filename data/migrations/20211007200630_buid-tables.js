
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipe', table => {
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
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.integer('step_number').notNullable()
        table.string('step_instructions').notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.string('ingredients_name')
        table.string('quantity')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredients_id')
        table.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('ingredients_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('steps_id')
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
