
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
          table.increments()
          table.string('recipe_name', 128)
      })
      .createTable('ingredients', table => {
          table.increments()
          table.string('ingredient_name', 128)
      })
      .createTable('recipes_and_ingredients', table => {
          table.increments()
          table.integer('recipes_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes')
          table.integer('ingredients_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('ingredients')
          table.integer('quantity')
            .unsigned()
            .notNullable()
      })
      .createTable('recipes_instructions', table => {
          table.increments()
          table.string('instructions')
              .unsigned()
              .notNullable()
      })
      .createTable('steps', table => {
          table.increments()

          table
              .integer('instructions_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes_instructions')

          table.integer('recipes_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes')

          table.string('step', 128)
          .notNullable()
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('recipes_and_ingredients')
      .dropTableIfExists('recipes_instructions')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
  };
  