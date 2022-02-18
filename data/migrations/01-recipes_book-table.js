exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id')
          table.string('recipe_name').notNullable().unique()
          table.timestamp('created_at').defaultTo(knex.fn.now())
      })
      .createTable('steps', table => {
          table.increments('step_id')
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
      .createTable('ingredients', table => {
          table.increments('ingredient_id')
          table.string('ingredient_name').notNullable().unique()
      })
      .createTable('steps_ingredients', table => {
          table.increments('steps_ingredients_id')
          table.decimal('quantity')
          table.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          table.integer('step_id')
              .unsigned()
              .notNullable()
              .references('step_id')
              .inTable('steps')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
  };