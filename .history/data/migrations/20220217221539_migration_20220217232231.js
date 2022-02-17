
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(recipe_id)
        })
};

exports.down = function(knex) {
  
};
