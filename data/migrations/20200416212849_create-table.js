
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
        table.increments()
        table.string("title", 128).notNullable()
    })

    .createTable("ingredients", table => {
        table.increments()
        table.string("ingredients", 128).notNullable()
        table
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })

    .createTable("instructions", table => {
        table.increments()
        table.text("instructions", 255).notNullable()
        table
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
