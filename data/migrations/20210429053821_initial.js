exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.integer("ingredients_id")
            .references("id")
            .inTable("ingredients")
            .notNull()
        table.integer("instructions_id")
            .references("id")
            .inTable("instructions")
            .notNull()
    })

    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.integer("step_number").notNull()
        table.integer("instructions_id")
            .references("id")
            .inTable("instructions")
            .notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient").notNull()
        table.text("quantity").notNull()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("instruction").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes")
};
