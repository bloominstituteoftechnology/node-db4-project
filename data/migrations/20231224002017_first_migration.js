/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes',table=>{
            table.increments('recipe_id')
            table.string('recipe_name')
            table.timestamp('created_at')
                .defaultTo(knex.fn.now())
        })
        .createTable('steps',table=>{
            table.increments('step_id')
            table.integer('step_number').unsigned()
            table.string('step_instructions')
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('ingredients',table=>{
            table.increments('ingredient_id')
            table.string('ingredient_name')
        })
        .createTable('step_ingredients',table=>{
            table.increments('step_ingredient_id')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('quantity')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
