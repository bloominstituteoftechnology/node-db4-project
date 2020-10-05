
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name').notNullable()
      tbl.string('type').notNullable()
  }); 
};

exports.down = function(knex) {
  return knex.scheme.dropTableIfExists('ingredients'); 
};
