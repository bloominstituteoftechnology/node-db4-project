
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128)
          .notNullable()
          .unique();
        tbl.timestamp('created at')
          .defaultTo(knex.fn.now());
        tbl.string('steps', 128)
          .notNullable();
     })
     .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number').notNullable();
        tbl.string('step_instructions', 128).notNullable().unique();
        tbl.integer('ingredients').notNullable();
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredients_id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tbl.decimal('quantity').notNullable();
    })
      .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 128);
    })
      .createTable('recipe_steps', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipe_id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step_id')
          .inTable('steps')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
          tbl.primary(['recipe_id', 'step_id']);
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
