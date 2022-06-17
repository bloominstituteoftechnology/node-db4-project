/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl=>{
        tbl.increments('recipe_id')//id
        tbl.text('recipe_name',128).unique().notNullable()
    })
    .createTable('ingredients',tbl=>{
        tbl.increments('ingredient_id')
        tbl.text('ingredient_name')
            .notNullable()
    })
    .createTable('steps',tbl=>{
        tbl.increments('steps_id')//id
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
        tbl.text('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.text('step_instructions',128)
            .notNullable()
        tbl.integer('ingredient_id')
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
    })
    .createTable('measurements',tbl=>{
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('steps_id')
            .notNullable()
            .unsigned()
            .references('steps_id')
            .inTable('steps')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('quantity')
            .unsigned()
            .notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('measurements')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
