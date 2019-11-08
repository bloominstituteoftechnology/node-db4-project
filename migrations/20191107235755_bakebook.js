
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();

      tbl.onDelete('RESTRICT')
      tbl.onUpdate('CASCADE');
    })

    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('instructions', 800).notNullable();
    })

    .createTable('recipes_ingredients', tbl => {
      tbl.increments();
      tbl
      .interger('ingredients_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .interger('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  
};
