exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments('id');
      tbl.string('recipe_name', 128).notNullable().unique();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('steps', (tbl) => {
      tbl.increments('id');
      tbl.integer('step_number').notNullable();
      tbl.string('step_instructions', 500).notNullable();
      tbl
        .string('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments('id');
      tbl.string('ingredient_name').notNullable().unique();
    })
    .createTable('step_ingredients', (tbl) => {
      tbl.increments();
      tbl.string('quantity').notNullable();
      tbl
        .string('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .string('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .string('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
