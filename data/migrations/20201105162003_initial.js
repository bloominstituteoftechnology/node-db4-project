exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name").notNull()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull()
  })

  await knex.schema.createTable("instructions", (table) => {
      table.increments("id")
      table.text("instruction")
      table.integer("recipe_id")
        .notNull()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("step_number").notNull()
  })
  
  await knex.schema.createTable("recipes_ingredients", (table) => {
      table.integer("ingredient_id")
        .notNull()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("recipe_id")
        .notNull()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.text("quantity").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
