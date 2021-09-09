
exports.up = async function(knex) {
    await knex.schema
        .createTable("recipes", table => {
            table.increments("recipe_id")
            table.string("recipe_name")
                .notNullable()
            table.datetime("created_at")
                .defaultTo(knex.fn.now())
        }).createTable("ingredients", table => {
            table.increments("ingredient_id")
            table.string("ingredient_name")
                .notNullable()
        }).createTable("steps", table => {
            table.increments("step_id")
            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipe_id")
                .inTable("recipes")
            table.integer("step_number")
                .unsigned()
                .notNullable()
            table.string("step_instructions")
                .notNullable()
        }).createTable("step_ingredients", table => {
            table.increments("step_ingredient_id")
            table.integer("step_id")
                .unsigned()
                .notNullable()
                .references("step_id")
                .inTable("steps")
            table.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("ingredient_id")
                .inTable("ingredients")
            table.decimal("quantity", null)
                .unsigned()
                .notNullable()
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("step_ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};
