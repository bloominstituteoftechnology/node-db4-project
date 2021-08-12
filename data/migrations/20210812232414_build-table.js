exports.up = function (knex) {
    return knex.schema.createTable("ingredients", table => {
        table.increments("ingredient_id");
        table.string("ingredient_name", 256).notNullable().unique();
    })
        .createTable("recipes", table => {
            table.increments("recipe_id");
            table.string("recipe_name", 138);
            table.string("created_at", 256);
        })
        .createTable("steps", table => {
            table.increments("step_id");
            table.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            table.string("step_instructions", 256);
            table.string("step_number", 138);

        })
        .createTable("step-ingredients", table => {
            table.increments("step_ingredient_id");
            table.integer("step_id")
                .unsigned()
                .notNullable()
                .references("step_id")
                .inTable("steps")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("ingredient_id")
                .unsigned()
                .references("ingredient_id")
                .inTable("ingredients")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.decimal("quantity")
                .unsigned();


        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("step-ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipes")
        .dropTableIfExists("ingredients")

};
