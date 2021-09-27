exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id');
          table.string('recipe_name').notNullable().unique();
      })
      .createTable('ingredients', table => {
          table.increments('ingredient_id');
          table.string('name').notNullable().unique();

      })
      .createTable('steps', table => {
          table.increments('step_id');
          table.integer('step_number')
          table.string('instructions').notNullable();
          table
              .integer('recipe_id')
              .unsigned()
              .references('recipe_id')
              .inTable('recipes')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
      })
      .createTable('step_ingredients', table => {
          table.increments();
          table
              .integer('step_id')
              .unsigned()
              .references('step_id')
              .inTable('steps')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
          table
              .integer('ingredient_id')
              .unsigned()
              .references('ingredient_id')
              .inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
          table.decimal('quantity').notNullable();
          table.string('measurement').notNullable();
      })
  };

  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };