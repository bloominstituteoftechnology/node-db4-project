
exports.up = async function(knex) {
    await knex.schema
      createTable('recipes', tbl => {
          tbl.increcements('recipe_id', 200).notNullable().unique()
          tbl.string('recip_name, 200').notNullable().unique()
  
      }),
      createTable('ingredients', tbl => {
          tbl.increments('ingredient_id')
          tbl.string('ingredient_name', 200).notNullable().unique()
          tbl.string('ingredient_unit', 50)
      } )
      createTable('steps', tbl => {
          tbl.increcements('step_id')
          tbl.string('step_text',200).notNullable()
          tbl.integer('step_number').notNullable()
          tbl.integer('recipe_id')
  
  
      })
      createTable('step_ingredients', tbl => {
          tbl.increments('step_ingredients_id')
          table.float('quantity').notNullable()
          tbl.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step.id')
          .inTable('steps')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
          .reference('ingredients_id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
  
      })
  };
  
  exports.down = async function(knex) {
  
      await knex.schema 
      .dropTableIfExists('steps_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
    
  };