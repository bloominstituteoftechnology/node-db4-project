exports.up =  function(knex) {
  return knex.schema
    .createTable('recipe_steps', tbl => {
      tbl.increments();
      tbl.text('step_direction', 300)
        .unique()
        .notNullable();
      tbl.integer('step_count')
        .unsigned()
        .notNullable();
    })

};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('recipes_steps');
};
