
exports.up = async function(knex) {
  await knex.schema

  .createTable('recipes', (table) => {
    table.increments('recipe_id')
    table.string('recipe_name', 128).notNullable()
    table.timestamps(true, true)
  })

  .createTable('recipe_steps', (table) => {
    table.increments('step_id')
    table.integer('step_num')
    table.string('step_instructions', 500).notNullable()

    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })

  .createTable('step_ingredients', (table) => {
    table.increments('ingredient_id')
    table.string('ingredient_name', 350).notNullable()
  })

  .createTable('ingredients_quantity', (table) => {
    table.increments('quantiy_id')
    table.string('quantity', 250).notNullable()

    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('step_ingredients')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')

    table
      .integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('recipe_steps')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('ingredients_quantity')
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipes')
};
