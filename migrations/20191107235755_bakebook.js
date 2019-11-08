
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      // the type of the Primary Key is: integer without negative values, also called unsigned
      tbl.increments();
      tbl.string('name', 255).notNullable();
    })
    .createTable('ingredientList', tbl => {
      tbl.increments();
      tbl.string('ingredient', 200).notNullable();
      tbl.string('quantity', 200).notNullable();
    })
    // .createTable('animals', tbl => {
    //   tbl.increments();
    //   tbl.string('name', 255).notNullable();
    //   // define our Foreign Key
    //   tbl
    //     .integer('species_id')
    //     .unsigned()
    //     .references('id')
    //     .inTable('species')
    //     .onDelete('RESTRICT')
    //     .onUpdate('CASCADE'); 
    // });
};

exports.down = function(knex) {
  
};
