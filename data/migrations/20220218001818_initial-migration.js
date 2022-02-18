exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id")
      tbl.string("recipe_name", 200).notNullable().unique()
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id")
      tbl.string("ingredient_name", 200).notNullable().unique()
      tbl.string("ingredient_unit", 50)
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id")
      tbl.string("step_text", 200).notNullable()
      tbl.string("step_number").notNullable()
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments("step_ingredient_id")
      tbl.float("quantity").notNullable()
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
    })
}

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("step_ingredients")
}
