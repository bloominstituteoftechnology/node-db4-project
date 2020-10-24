
exports.up = async function(knex) {
    await knex.schema.createTable("recipies", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("instructions").notNull()
    })
  
    await knex.schema.createTable("amount", (table)=> {
        table.increments("id")
        table.blob("amount").notNull()
    })
  
    await knex.schema.createTable("ingredients", (table)=> {
        table.increments("id")
        table.text("name").notNull()
        table
            .integer("amount_id")
            .references("id")
            .inTable("amount")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })
  
    await knex.schema.createTable("recipies_ingredients", (table)=> {
        table
            .integer("recipies_id")
            .references("id")
            .inTable("recipies")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
  
        table
            .integer("ingredients_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()

        table 
            .integer("amount_id")
            .references("id")
            .inTable("amount")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
          
        table.primary(["recipies_id", "ingredients_id"])
  
  
    })
  
  
  
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("recipies_ingredients")
      await knex.schema.dropTableIfExists("ingredients")
      await knex.schema.dropTableIfExists("amount")
      await knex.schema.dropTableIfExists("recipies")
    
  };