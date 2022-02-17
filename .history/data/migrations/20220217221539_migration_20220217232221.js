
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(recipe_)
        })
};

exports.down = function(knex) {
  
};
