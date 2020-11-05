
exports.up = function(knex) {
  // recipies is the 1
  return knex.schema.createTable('recipies', tbl => {
      tbl.increments();
      tbl.string('recipie_name', 128).notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
      //FK here
      tbl.integer('recipie_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipies')
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.string('step_name', 128)
      //FK here
      tbl.integer('ing_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
  })
  .createTable('ingredients_steps', tbl => {
    tbl.increments();
    tbl.string('step_name', 128)
    //FK here
    tbl.integer('step_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('steps')
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients_steps')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipies')
};
