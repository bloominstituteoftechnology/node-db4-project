
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.text('recipe_name', 128)
            .unique()
            .notNullable()
    })
    .createTable('measurements', tbl => {
        tbl.increments('measurement_id')
        tbl.integer('measurement_in_cups')
            .unique()
            .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.text('ingredient')
            .notNullable()
            .unique()
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.text('instructions')
            .notNullable()
        tbl.integer('recipe_id')
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('step_number')
            .notNullable()
        tbl.integer('measurement_id')
            .notNullable()
            .references('measurement_id')
            .inTable('measurements')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('measurements')
    .dropTableIfExists('recipes')
};
