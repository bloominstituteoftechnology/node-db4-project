
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipe_id')
            table.string('recipe_name', 128).notNull()
        })
        .createTable('ingredients', (table) => {
            table.increments
        })
};

exports.down = function(knex) {
  
};
