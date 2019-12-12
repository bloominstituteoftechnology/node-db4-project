
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl=> {

        tbl.increments();

        tbl.string('recipe_name')
        .notNullable()
  })
  .createTable('ingredients', tbl =>{

        tbl.increments();

        tbl.string('ingredient_name')
        .notNullable()

  })
  .createTable('instructions', tbl => {

        tbl.increments();

        tbl.string('step_name')
        .notNullable()

  })
  .createTable('recipe_ingredients', tbl => {

        tbl.primary(['recipe_id', 'ingredient_id'])
        
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.integer('quantity_ingredients')

  })
  .createTable('recipe_instructions', tbl => {

        tbl.primary(['recipe_id', 'step_id'])

         tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.integer('step_order_position')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_instructions')
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
