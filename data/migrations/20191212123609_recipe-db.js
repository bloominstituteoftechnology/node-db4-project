
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl=> {

        tbl.increment();

        tbl.string('recipe_name')
        .notNullable()
  })
  .createTable('ingredients', ()=>{

        tbl.increment();

        tbl.string('ingredient_name')
        .notNullable()

  })
  .createTable('instructions', tbl => {

        tbl.increment();

        tbl.string('step_name')
        .notNullable()

  })
  .createTable('recipe_ingredients', tbl => {

        tbl.primary('recipe_id', 'ingredient_id')
        
        tbl.integer('recipe_id')
        .notNullable()
        .reference('id')
        .inTable('recipe')

        tbl.integer('ingredient_id')
        .notNullable()
        .reference('id')
        .inTable('ingredients')

        tbl.integer('quantity_ingredients')

  })
  .createTable('recipe_instructions', tbl => {

        tbl.primary('recipe_id', 'step_id')

         tbl.integer('recipe_id')
         .notNullable()
        .reference('id')
        .inTable('recipe')

        tbl.integer('step_id')
        .notNullable()
        .reference('id')
        .inTable('instructions')

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
