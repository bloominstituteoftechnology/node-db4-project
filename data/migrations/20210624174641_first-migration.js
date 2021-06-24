
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl=>{
        tbl.increments("recipe_id")
        tbl.string("recipe_name", 128).notNullable().unique() ///anything that's a string, that number after is saying the max-number of characters allowed
        tbl.string("created_at",128).notNullable()
    })
    .createTable("steps", tbl=>{
        tbl.increments("step_id")
        tbl.integer("step_number", 128)
        tbl.string("step_instructions")
        tbl.integer("recipe_id").notNullable
    })
    .createTable("ingredients", tbl=>{
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name",128).notNullable()
        tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
            .onDelete("RESTRICT")
    })
    .createTable("step-ingredients", tbl=>{
        tbl.increments("step_ingredients_id")
        tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
            .onDelete("RESTRICT")
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredient_id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
        tbl.integer("quantity")
    })
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
};