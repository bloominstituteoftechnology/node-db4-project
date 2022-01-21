
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table =>{
      table.increments('recipe_id')
      table.text('recipe_name').notNullable().unique()
  })
  .createTable('steps', table =>{
      table.increments('step_id')
      table.integer('step_number').notNullable()
      table.string('instructions').notNullable()
      table.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('ingredients', table =>{
      table.increments('ingredient_id')
      table.text('ingredient_name').notNullable().unique()
  })
  .createTable('step_ingredients', table =>{
      table.increments('stepIngredients_id')
      table.integer('step_id')
        .notNullable()
        .unsigned()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.text('quantity').notNullable();
  })
};

exports.down = async function (knex) {
    await knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('step_ingredients')
  };
