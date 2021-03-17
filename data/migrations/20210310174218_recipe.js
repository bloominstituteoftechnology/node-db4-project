exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name").notNull().unique() 
    })
    await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table
          .integer("recipe_id")
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
    })
    await knex.schema.createTable("instructions", (table) => {
      table.increments("id")
      table.string("instructions").notNull().unique() 
      table.integer("step_number").notNull()
      table
          .integer("recipe_id")
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
    })
    await knex.schema.createTable("amounts", (table) => {
      table.increments("id")
      table.string("amount").notNull()
      table
          .integer("recipe_id")
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
      table
          .integer("ingredient_id")
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("amounts")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
  };