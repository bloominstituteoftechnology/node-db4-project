
exports.up = async function (knex) {
    await knex.schema
    .createTable("recipes", table => {
        table.increments("recipe_id");
        table.string("recipe_name", 128).unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    
    .createTable("steps", table => {
    table.increments("step_id");
    table.integer("step_number").unsigned().notNullable();
    table.string("step_instructions", 256).notNullable();
    table.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    
    .createTable("ingredients", table => {
    table.increments("ingredient_id");
    table.string("ingredient_name", 128).unique().notNullable();
    })
    
    .createTable("steps_ingredients", table => {
    table.increments("steps_ingredients_id");
    table.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    table.integer("ingredient_id")
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    table.integer("quantity_oz").unsigned();
    })

};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists("steps_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipes")
};
