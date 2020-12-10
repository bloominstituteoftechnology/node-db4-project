const { table } = require("console");

exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 128).notNullable()
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name',128).notNullable()
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.string('step_number', 128).notNullable()
            table.string('instruction', 228).notNullable()
            table.integer('recipe_id')
                .unsigned().notNullable()
                .references('recipe_id').inTable('recipes')
            .onDelete('CASCADE').onUpdate('CASCADE')
        })
        .createTable('steps & ingredients' , table => {
            table.increments('S&I_id')
            table.string('quantity', 128).notNullable()
            table.integer('step_id')
                .unsigned().notNullable()
                .references('step_id').inTable('steps')
                .onDelete('CASCADE').onUpdate('CASCADE') 
            table.integer('ingredient_id')
                .unsigned().notNullable()
                .references('ingredient_id').inTable('ingredients')
                .onDelete('CASCADE').onUpdate('CASCADE') 
                })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('steps & ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
