exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 128)
        .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name')
        .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onDelete('restrict') // RESTRICT
            .onUpdate('restrict')
        tbl.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .onDelete('restrict') // RESTRICT
            .onUpdate('restrict')
        tbl.string('quantity')
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.string('instruction').notNullable()
            tbl.integer('recipe_id')
                .references('id')
                .inTable('recipes')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};