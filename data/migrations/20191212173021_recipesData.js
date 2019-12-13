
exports.up = function(knex) {
  return knex.schema.createTable('ingredient', tbl => {
      tbl.increments();

      tbl.string('ingredient_name', 255).notNullable();
  })
  .createTable('recipe_step', tbl => {
      tbl.increments();

      tbl.string('unit_of_measurement', 255).notNullable();

      tbl.float('quantity').notNullable();

      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
  .createTable('instructions', tbl => {
      tbl.increments();

      tbl.float('step').notNullable();

      tbl.string('instruction', 255).notNullable();

      tbl.integer('recipe_step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe_step')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });

};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_step')
    .dropTableIfExists('ingredient');
};
