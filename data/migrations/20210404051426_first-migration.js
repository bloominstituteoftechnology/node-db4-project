
exports.up = function(knex) {
  return knex.schema
  .createTable("recipe_book",tbl =>{
      tbl.increments("recipe_book_id")
      tbl.string("recipe_book_name").notNullable().unique()
  })
  .createTable("recipes", tbl =>{
      tbl.increments("recipe_id")
      tbl.string("recipe_name").notNullable().unique()
      tbl.string("created_at").notNullable()
      tbl.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
  })
  .createTable("steps", tbl =>{
      tbl.increments("step_id")
      tbl.string("step_number")
      tbl.string("step_instructions")
      tbl.integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
  })
  .createTable("ingredients", tbl =>{
    tbl.increments("ingredients_id")
    tbl.string("ingredients_name")
    tbl.string("quantity")
  })
  .createTable("recipe_choices",tbl =>{
    tbl.increments("recipe_steps_id")
    tbl.integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("recipes_id")
        .inTable("recipes")
        .onDelete("CASCADE")
    tbl.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists("recipe_steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes")
  .dropTableIfExists("recipe_book")
};
