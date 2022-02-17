
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments
        })
};

exports.down = function(knex) {
  
};
