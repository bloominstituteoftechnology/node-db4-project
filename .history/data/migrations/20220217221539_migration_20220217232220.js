
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(recipe)
        })
};

exports.down = function(knex) {
  
};
