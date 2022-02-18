
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.text('recipe_name', 128)
            .unique()
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number')
            .unsigned()
        tbl.text('instructions')
            .notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ing_id')
        tbl.text('ing_name', 128)
        tbl.text('ing_unit')
    })
    .createTable('ing_step', tbl => {
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
        tbl.integer('ing_id')
            .unsigned()
            .notNullable()
            .references('ing_id')
            .inTable('ingredients')
        tbl.decimal('quantity')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ing_step')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
