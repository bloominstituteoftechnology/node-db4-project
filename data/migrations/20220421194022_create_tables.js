
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.text('recipe_name')
            .unique()
            .notNullable();
        tbl.timestamp('created_at')
            .defaultTo(knex.fn.now());
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number')
            .notNullable();
        tbl.text('step_instructions')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.text('ingredient_name')
            .notNullable();
        tbl.text('quantity')
            .notNullable()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
