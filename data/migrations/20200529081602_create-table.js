

exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 128)
                .unique()
                .notNullable();
            tbl.integer('ingredients_id')
                .references('id')
                .inTable('ingredients')
                .unsigned()
                .notNullable();
            tbl.integer('instructions_id')
                .references('id')
                .inTable('instructions')
                .unsigned()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('amount')
                .unsigned()
                .notNullable();
            tbl.text('unit', 128)
                .notNullable();
            tbl.text('ingredient', 128)
                .unique()
                .notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.text('instruction', 128)
                .notNullable();

        })
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.text('step', 128)
                .notNullable();
            tbl.integer('instructions_id')
                .references('id')
                .inTable('instructions')
                .unsigned()
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('steps')
};