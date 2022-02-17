
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipe_id')
            table.string('recipe_name', 128).nat
        })
};

exports.down = function(knex) {
  
};
