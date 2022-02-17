
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(recipe_id)
            table.
        })
};

exports.down = function(knex) {
  
};
