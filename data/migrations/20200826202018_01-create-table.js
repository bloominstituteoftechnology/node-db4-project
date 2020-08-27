
exports.up = function(knex) {
    return knex.schema
      .createTable('instructions', tbl => {
          tbl.increments();
          tbl.text('instructions', 500).notNullable();
      })
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.text('ingredient', 128).notNullable();
          tbl.float('quantity').notNullable();
  
      })
      .createTable('recipe', tbl => {
          tbl.increments();
          tbl.integer('instructionId')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('instructions')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.integer('ingredientId')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('ingredients')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.text('name')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('instructions')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe');
  };