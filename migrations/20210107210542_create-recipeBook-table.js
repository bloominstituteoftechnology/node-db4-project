
exports.up = async function(knex) {
  await knex.schema.createTable("ingredients",(table)=>{
      table.increments("id")
      table.text("ingredient").notNullable()
  })

  await knex.schema.createTable("recipes", (table)=> {
      table.increments("id")
      table.text("recipe").notNullable()
  })

  await knex.schema.createTable("instructions", (table)=> {
      table.increments("id")
      table.text("step").notNullable()
    //   table.text("description").notNullable()
      table.text("recipeId").notNullable().references("id").inTable("recipes")
  })

  await knex.schema.createTable("recipes_ingredients", (table)=>{
      table.integer("recipeId").notNullable().references("id").inTable("recipes").onDelete("CASCADE")
      table.integer("ingredientId").notNullable().references("id").inTable("ingredients").onDelete("CASCADE")
      table.float("quantity").notNullable()
      table.primary(["ingredientId", "recipeId"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("recipes")
  await knex.schema.dropTableIfExists("ingredients")
};
