
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.string('recipe', 128).notNullable().unique()
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.string('ingredient', 128).notNullable().unique()
        })
        .createTable('recipe_steps', tbl => {
            tbl.increments('step_id')
            tbl.string('step_description', 128).notNullable()
            tbl.integer('step_number').unsigned().notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments('step_ingredient_id')
            tbl.integer('ingredient_id')
                .unsigned()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
            tbl.float('quantity').unsigned()
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('recipe_steps')
                .onDelete('RESTRICT')
       })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
