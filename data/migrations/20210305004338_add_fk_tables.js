
exports.up = function(knex) {
  return knex.schema.createTable("Instructions", tbl => {
      tbl.increments()
      tbl.integer("Recipe_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Recipes")
      tbl.integer("Step_Number")
        .unsigned()
        .notNullable()
      tbl.text("Instruction")
        .notNullable()
  })
  .createTable("Recipe_Details", tbl => {
      tbl.increments()
      tbl.integer("Recipe_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Recipes")
      tbl.integer("Ingredient_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Ingredients")
      tbl.integer("Ingredient_Qty")
        .unsigned()
        .notNullable()
      tbl.text("Unit")
        .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Recipe_Details")
    .dropTableIfExists("Instructions")
};
