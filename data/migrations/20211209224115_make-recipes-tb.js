
exports.up = async function(knex) {
    await knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 128).notNullable()
      table.string('created', 256)
    })
    .createTable('steps', table =>{
        table.increments('step_id')
        table.string('step_instruction')
        table.integer('step_number')
        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients', table =>{
        table.increments('ingredient_id')
        table.string('ingredient_name')
        table.integer('quantity')
    })
    .createTable('recipes_steps', table => {
        table.increments('recipes_steps_id')
        table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
      table
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('recipes_steps')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
