/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipes',tbl=>{
        tbl.increments('recipe_id');
        tbl.string('recipe_name',128).notNullable().unique();
        tbl.string('created_at').notNullable()
    })
    .createTable('steps',tbl=>{
        tbl.increments("step_id");
        tbl.integer('step_number').notNullable().unsigned();
        tbl.string('step_instructions',255).notNullable();
        tbl.integer('recipe_id').unsigned().notNullable()
                                .references('recipe_id').inTable('recipes')
    })
    .createTable('ingredients', tbl => {
        tbl.increments("ingredient_id");
        tbl.string('ingredient_name', 128).notNullable();
        tbl.decimal('quantity', 128).notNullable();
        tbl.integer('step_id').unsigned().notNullable()
            .references('step_id').inTable('steps')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients')
                      .dropTableIfExists('steps')
                      .dropTableIfExists('recipes')
  
};
