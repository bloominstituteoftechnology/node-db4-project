
exports.up = function(knex) {
  return knex.schema.createTable('ingredient', tbl => {
      tbl.increments();

      tbl.string('ingredient_name', 255).notNullable();
  })
};

exports.down = function(knex) {
  
};
