
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', table => {
        table.increments('recipe_id')
        table.text('recipe_name', 100)
            .notNullable()
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number')
            .unsigned()
            .notNullable()
        table.text('step_instructions', 200)
            .notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.text('ingredient_name', 50)
            .notNullable()
    })
    .createTable('recipe_book', table => {
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
        table.integer('step_id')
            .unsigned()
            .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('recipe_book')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
