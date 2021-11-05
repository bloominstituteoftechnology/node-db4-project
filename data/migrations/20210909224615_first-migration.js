
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable().unique()
        table.timestamps(true, true)
    })
    .createTable('recipe_steps', table => {
        table.increments('recipe_step_id')
        table.integer('step_number').unsigned().notNullable()
        table.string('step_instructions', 360).notNullable()
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
        table.string('ingredient_name', 128).notNullable().unique()
    })
    .createTable('step_ingredient_quantities', table => {
        table.increments('step_ingredient_quantity_id')
        table.float('quantity').unsigned().notNullable()
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('recipe_step_id')
            .unsigned()
            .notNullable()
            .references('recipe_step_id')
            .inTable('recipe_steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredient_quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipes')
};
