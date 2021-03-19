
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments("recipes_id")
        tbl.string("recipes_name").unique().notNullable()
        tbl.timestamp("add_date")
    })
    .createTable("steps", tbl => {
        tbl.increments("steps_id")
        tbl.string("steps_name")
        tbl.decimal("steps_number")
        tbl.string("steps_instructions", 255).notNullable()

    })
    .createTable("ingredients", tbl => {
        tbl.increments("ingredients_id")
        tbl.string("ingredients_name").notNullable()
    })
    .createTable("steps_ingredients", tbl => {
        tbl.increments("steps_ingredients_id")
        tbl.decimal("steps_ingredient_amount").notNullable()
        tbl.integer("ingredients_id")
            .unsigned()
            .notNullable()
            .references("ingredients_id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
            .onUpdate("RESTRICT")
        tbl.integer("steps_id")
            .unsigned()
            .notNullable()
            .references("steps_id")
            .inTable("steps")
            .onDelete("RESTRICT")
            .onUpdate("RESTRICT")
        tbl.integer("recipes_id")
            .unsigned()
            .notNullable()
            .references("recipes_id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("RESTRICT")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist("ingredients")
    .dropTableIfExist("steps_ingredients")
    .dropTableIfExist("steps")
    .dropTableIfExist("recipes")
};
