
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 128)
        .notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name', 128)
      .notNullable()
  })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer('step_number')
        tbl.string('step_name', 128)
        tbl.text('step_instructions')
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('quantity')
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  };