
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('id')
            tbl.string('name', 128).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments('id')
            tbl.string('name', 128).notNullable()
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments('id')
            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('ingredient_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('instructions', tbl => {
            tbl.increments('id')
            tbl.integer('step')
                .notNullable()
                .unsigned()
            tbl.string('instruction', 128)
                .notNullable()
            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('ingredient_quanity', tbl => {
            tbl.increments('id')
            tbl.string('amount', 128)
                .notNullable()
            tbl.integer('receipe_ingredient_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes_ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredient_quantity')
};
