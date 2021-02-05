
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
   tbl.increments('recipe_id') //can be blank
   tbl.string('recipe_name', 128).unique().notNullable()
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredients_id')
    tbl.string('ingredients_name', 128).unique().notNullable()
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.increments('id')
      tbl.integer('recipe_id').notNullable().unsigned().references('recipes_id').inTable('recipes').onDelete('RESTRICT') //look up what restrict does
      tbl.integer('ingredients_id').notNullable().unsigned().references('ingredients_id').inTable('ingredients').onDelete('RESTRICT') //look up what restrict does
      tbl.float('quantity').notNullable()
  })
  .createTable('instructions', tbl => {
      tbl.increments('id')
      tbl.integer('recipe_id').notNullable().unsigned().references('recipes_id').inTable('recipes').onDelete('RESTRICT')
      tbl.string('instructions').notNullable()
      tbl.integer('instructions_order').notNullable()

  })



};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};

  
