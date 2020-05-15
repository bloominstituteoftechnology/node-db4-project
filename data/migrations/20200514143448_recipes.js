
exports.up =  function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })

};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('recipes');
};
