
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("recipe_name").notNull().unique()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.text("ingredient_name").notNull().unique()
    table.integer("quantity").notNull()
  })

  await knex.schema.createTable("steps", (table) => {
    table.increments("id")
    table.text("step_instructions").notNull()
    table.integer("ingredient_id")
      .notNull()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
  })

  await knex.schema.createTable("recipes_variety", (table) => {
    table.increments("id")
    table.integer("recipe_id")
      .notNull()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
    table.integer("ingredient_id")
      .notNull()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_variety")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
