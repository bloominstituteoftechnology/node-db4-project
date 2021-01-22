
exports.up = function(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id');
        table.text('name').notNullable();
    })
    .createTable('ingredients', (table) => {
        table.increments('id');
        table.text('name').notNullable();
        table.text('quantity').notNullable();
    })
    .createTable('recipe_ingredients', (table) => {
        table
            .integer('recipe_id')
            .references('id')
            .inTable('recipes')
        table
            .integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
    })
    .createTable('steps', (table) => {
        table.increments('id')
        table.text('instruction').notNullable()
        table
            .integer('recipe_id')
            .references('id')
            .inTable('recipes')
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};