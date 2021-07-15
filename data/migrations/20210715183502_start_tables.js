
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.text('ingredient_name',128);
    })
    .createTable('ingredient_steps', tbl => {
        tbl.increments('ingredient_step_id');
        tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        tbl.integer('quantity')
        .unsigned()
        .notNullable();
        tbl.text('measure', 128)
        .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredient_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
