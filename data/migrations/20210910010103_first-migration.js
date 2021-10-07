exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id') //PK
      table.string('recipe_name', 256).notNullable().unique()
      table.timestamps(true)
    })
    .createTable('steps', table => {
      table.increments('step_id') //PK
      table.integer('step_number').notNullable()
      table.string('step_instructions', 256).notNullable()
      table.integer('recipe_id') //FK
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id') //PK
      table.string('ingredient_name', 140).notNullable()
      table.integer('step_id') //FK
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('quantities', table => {
      table.increments('quantity_id') //PK
      table.decimal('quantity').notNullable()
      table.integer('ingredient_id') //FK
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('recipe_ingredients', table => {
      table.increments('recipe_ingredient_id') //PK

      table.integer('recipe_id') //FK
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('ingredient_id') //FK
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
