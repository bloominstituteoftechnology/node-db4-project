/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('recipes',tbl=>{
        tbl.increments('recipe_id');
        tbl.string('recipe_name',128).notNullable().unique();
       // tbl.string('created_at').notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments("ingredient_id");
        tbl.string('ingredient_name', 200).notNullable().unique();
        tbl.string('ingredient_unit',50)
       
        
    })
    .createTable('steps',tbl=>{
        tbl.increments("step_id");
        tbl.integer('step_number').notNullable().unsigned();
        tbl.string('step_instructions',255).notNullable();
        tbl.integer('recipe_id').unsigned().notNullable()
                                .references('recipe_id').inTable('recipes')
                                .onDelete('RESTRICT').onUpdate("RESTRICT")
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments("step_ingredient_id");
        tbl.float('quantity', 128).notNullable();
        tbl.integer('step_id').unsigned().notNullable()
                              .references('step_id').inTable('steps')
                              .onDelete('RESTRICT').onUpdate("RESTRICT")
        tbl.integer('ingredient_id').unsigned().notNullable()
                              .references('ingredient_id').inTable('ingredients')
                              .onDelete('RESTRICT').onUpdate("RESTRICT")
    })
    
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
  
};
