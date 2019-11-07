
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.string('info', 300).notNullable();
        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
};

exports.down = function(knex) {
  
};
