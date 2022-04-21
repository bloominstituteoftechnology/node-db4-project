
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.string('recipe_name', 256)
                .notNullable()
                .unique()
        })
        .createTable('ingredients', tbl => {
            // ingredients
                // ingredient_id PRIMARY_KEY
                // ingrediento_name
                // ingredient_unit
            tbl.increments('ingredient_id');
            tbl.string('ingredient_name', 64)
                .notNullable()
                .unique();
            tbl.string('ingredient_unit', 64)
        })
        .createTable('steps', tbl => {
            // steps
                // step_id PRIMARY_KEY
                // step_number
                // step_instructions
                // ingredients_id FOREIGN KEY (ingredients.ingredients_key)
            tbl.increments('step_id')
            tbl.integer('step_number')
                .notNullable()
            tbl.string('step_instructions', 256)
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments('step_ingredient_id')
            tbl.float('quantity')
                .notNullable()
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
        })
};

exports.down = function(knex) {
     knex.schema
     .dropTableIfExists('step_ingredients')
     .dropTableIfExists('steps')
     .dropTableIfExists('ingredients')
     .dropTableIfExists('recipes')
};
