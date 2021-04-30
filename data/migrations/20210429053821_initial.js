exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.date("created")
    })

    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.integer("step_number").notNull()
        table.text("step_instructions").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient_name").notNull()
        table.text("quantity").notNull()
    })

    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
        table.integer("ingredient_id")
            .notNull()
            .references("id")
            .inTable("ingredients")

        table.primary(["recipe_id", "ingredient_id"])
    })

    await knex.schema.createTable("recipes_steps", (table) => {
        table.integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
        table.integer("step_id")
            .notNull()
            .references("id")
            .inTable("steps")

        table.primary(["recipe_id", "step_id"])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_steps")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes")
};
