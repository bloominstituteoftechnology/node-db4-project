
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name').notNullable().unique()
        tbl.string('preptime').notNullable()
        tbl.string('servings').notNullable()
      })
      .createTable('ingredients', tbl => {
          tbl.increments()
          tbl.string('name').notNullable()
      })
      .createTable('recipe_ingredients', tbl => {
          tbl.increments()
          tbl
              .integer('recipe_id')
              .unsigned()
              .references('id')
              .inTable('recipes')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          tbl
              .integer('ingredient_id')
              .unsigned()
              .references('id')
              .inTable('ingredients')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          tbl
              .unique(['recipe_id', 'ingredient_id'])
      })
      .createTable('instructions', tbl => {
          tbl.increments()
          tbl
              .integer('recipe_id')
              .unsigned()
              .references('id')
              .inTable('recipes')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE')
          tbl
              .string('instruction').notNullable()
      })
  
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };