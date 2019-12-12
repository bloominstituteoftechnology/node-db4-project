
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 255).notNullable()
        tbl.string('recipe_author', 255)
    })
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.string('step', 255)
        tbl.integer('step_order').notNullable()

        tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients'), tbl => {
        tbl.increments()
        tbl.string('ingredients_name', 255).notNullable()
    }
};

exports.down = function(knex) {
  
};
