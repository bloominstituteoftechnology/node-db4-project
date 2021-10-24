
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.string('recipe_name').notNullable().unique()
        })
        .createTable('steps', tbl => {
            tbl.increments('step_id')
            tbl.string('step_instructions').notNullable()
            tbl.integer('step_number').notNullable().unsigned()
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.string('ingredient_name').notNullable().unique()
            tbl.integer('quantity').notNullable().unsigned()
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('CASCADE')
        })
        .createTable('recipes_steps', tbl => {
            tbl.increments('recipe_step_id')
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('CASCADE')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes_step_id')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
