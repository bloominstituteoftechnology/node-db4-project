
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", table => {
        table.increments("id")
        table.text("recipe").notNull().unique()
    })
    await knex.schema.createTable("steps", table => {
        table.increments("id")
        table.integer("step_number")
        table.text("instruction")
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })
    await knex.schema.createTable("ingredients", table => {
        table.increments("id")
        table.text("ingredient")
    })

    await knex.schema.createTable("recipe_ingredients", table => {
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onUpdate('CASCADE') // if Article primary key is changed, update this foreign key.
            .onDelete('CASCADE')
        table.integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onUpdate('CASCADE') // if Article primary key is changed, update this foreign key.
        .onDelete('CASCADE')
        table.string("quantity")
        table.primary(["recipe_id", "ingredient_id"])
        
    })
        

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes")
  
};
