
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      
      tbl.string('name', 255).notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      
      tbl.string('name', 255).notNullable();
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      
      tbl.string('text', 255).notNullable();
      
      tbl.integer('step_number').notNullable();
      
      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      
      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl.float('amount').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
