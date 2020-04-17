
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
        table.increments()
        table.string("title", 128)
            .notNullable()
    })

    .createTable("ingredients", table => {
        table.increments()
        table.decimal("quantity", null)
            .notNullable()
        table.string("ingredients", 128)
            .notNullable()
        table
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })

    .createTable("instructions", table => {
        table.increments()
        table.integer("step_number")
            .unsigned()
            .notNullable()
        table.text("instructions", 255)
            .notNullable()
        table
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })

    .createTable("recipes_ingredients", table => {
        table.increments()
        table.integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.integer("ingredients_id")
            .unsigned()
            .references("id")
            .inTable("ingredients")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
