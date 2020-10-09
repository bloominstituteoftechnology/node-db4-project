
exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", table => {
            table.increments();
            table.string("recipe_name").notNullable().unique();
        })
        .createTable("ingredients", table => {
            table.increments();
            table.string("ingredient_name").notNullable();
            table.integer("recipe_id")
                .unsigned()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
        .createTable("prices", table => {
            table.increments();
            table.decimal("price").notNullable()
            table.integer("ingredient_id")
                .unsigned()
                .references("id")
                .inTable("ingredient")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipes")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("prices");
};
