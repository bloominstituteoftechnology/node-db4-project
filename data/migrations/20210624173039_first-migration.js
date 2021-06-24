
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl=>{
        tbl.increments("recipe_id")
        tbl.string("recipe_name",128).notNullable().unique()
        tbl.string("created_at",128).notNullable()
        // QUESTION:  what is the better way to code date
    })
    .createTable("steps", tbl=>{
        tbl.increments("step_id")
        tbl.integer("step_number")
        tbl.string("step_instructions")
        tbl.integer("recipe_id").notNullable()
    })
    .createTable("ingredients", tbl=>{
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name",128).notNullable()
        tbl.integer("step_id")
            .unsigned() // QUESTION:  what does this mean?  Must be a num?
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
