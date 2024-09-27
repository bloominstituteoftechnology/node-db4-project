
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 128).notNullable().unique()
        tbl.date('created_at')
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number').notNullable()
        tbl.string('step_instructions', 280)
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('ingredients_id')
            .unsigned()
            .references('ingredients_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
        tbl.decimal('quantity')
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredients_id')
        tbl.string('ingredient_name', 128)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
