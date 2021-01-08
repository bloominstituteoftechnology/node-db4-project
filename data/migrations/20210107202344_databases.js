
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', table => {
        table.increments('id');
        table.text('recipeName').notNull();
        table.text('recipeInstructions').notNull().unique();
    })

    await knex.schema.createTable('ingredients', table => {
        table.increments('id');
        table.text('ingredientName').notNull();
        table.text('quantity').notNull();
        table.integer('recipe_id').notNull().references('id').inTable('recipes');
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ingredients');
    await knex.schema.dropTableIfExists('recipes');
};
