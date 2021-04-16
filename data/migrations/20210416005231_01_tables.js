exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
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
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.text('ingredient_name')
            .unique()
            .notNullable()
    })
    .createTable('stepingredients', tbl => {
        tbl.increments('stepingredients_id');
        tbl.text('amount')
          .notNullable();
        tbl.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step_id')
          .inTable('steps')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredient_id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('stepingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes');
};
