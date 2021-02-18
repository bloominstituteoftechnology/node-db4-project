
exports.up = function(knex) {
  return knex.schema
  .createTable('recipies', table =>{
      table.increments('recipe_id')
      table.string('recipe_name', 150).notNullable()
  })
  .createTable('ingredients', table =>{
      table.increments('ingredient_id')
      table.string('ingredient_name', 150).notNullable()
      table.integer('ingredient_quantity').notNullable()
  })
  .createTable('prep-ingredients', table =>{
      table.increments('ingredient_prep_id')
      table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .refrences('ingredient_id')
      .inTable('ingredients')
      .onDelete('CASCADE')
  })
  .createTable('cook-instuctions', table =>{
    table.increments('cook_instuction_id')
    table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .refrences('recipe_id')
        .inTable('recipies')
        .onDelete('CASCADE')
    table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .refrences('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
      
  })
};

exports.down = function(knex) {
  
};
