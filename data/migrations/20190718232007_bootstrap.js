exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .text('recipe_name', 128)
        .unique()
        .notNullable();
    })

    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .text('ingredient_name', 128)
        .unique()
        .notNullable();
    })

    .createTable('recipes_ingredients', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .decimal('quantity', 2)
        .unsigned()
        .notNullable();
    })

    .createTable('steps', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('step_number')
        .unsigned()
        .notNullable();

      tbl.text('instruction', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('steps');
};
