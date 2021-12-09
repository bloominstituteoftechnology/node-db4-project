exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id');
      table.string('recipe_name', 128).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id');
      table.string('ingredient_name', 128).notNullable();
      table.string('ingredient_unit', 128).notNullable();
    })
    .createTable('steps', (table) => {
      table.increments('step_id');
      table.integer('step_number').notNullable().unsigned();
      table.string('step_instructions').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    .createTable('step_ingredients', (table) => {
      table.increments('step_ingredient_id');
      table.integer('quantity').notNullable();
      table
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
