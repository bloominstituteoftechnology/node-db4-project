
exports.up = function(knex) {
  return  knex.schema
  .createTable("Ingredients", tbl=>{
    tbl.increments("id").primary();
    tbl.string("Ingredient_name").notNullable().index().unique();
  })

  .createTable("Recipes", tbl=>{
    tbl.increments("id").primary();
    tbl.string("Recipe_name").notNullable();
    tbl.string("description");
  })

  .createTable("Steps", tbl=>{
    tbl.increments("id").primary();
    tbl.string("Instructions").notNullable();
    tbl.string("StepNumber").notNullable();
    //foreign key Recipe ID
    tbl.string("RecipeId",255)
        .notNullable()
        .references("id")
        .inTable("Recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
  })

  .createTable("Ingredients_recipes", tbl=>{
    //foreign Recipe
    tbl.integer("RecipeId")
        .notNullable()
        .references("id")
        .inTable("Recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    //foreign Ingredients
    tbl.integer("IngredientId")
        .notNullable()
        .references("id")
        .inTable("Ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Ingredients_recipes")
    .dropTableIfExists("Recipes")
    .dropTableIfExists("Ingredients")
    .dropTableIfExists("Steps");
};
