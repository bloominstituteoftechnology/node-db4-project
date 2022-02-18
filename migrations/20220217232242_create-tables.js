
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', (table) => {
      table.increments('recipe_id')
      table.string('recipe_name', 100).unique().notNullable()
  })
  .createTable('ingredients', (table) => {
      table.increments('ingredients_id')
      table.string('ingredient_name', 100).notNullable()
      table.string('quantity', 100).notNullable()
  })
  .createTable('steps', (table) => {
      table.increments('steps_id')
      table.integer('step_number').notNullable()
      table.string('step_instructions').notNullable()
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
  .createTable('recipe_contents', (table) => {
      table.increments('recipe_contents_id')
      table.integer('steps_id')
        .unsigned()
        .notNullable()
        .references('steps_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists('recipe_contents')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
