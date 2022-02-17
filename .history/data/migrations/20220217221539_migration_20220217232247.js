
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(recipe_id)
            table.string()
        })
};

exports.down = function(knex) {
  
};
