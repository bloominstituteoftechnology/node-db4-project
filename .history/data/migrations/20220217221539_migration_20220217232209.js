
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments(re)
        })
};

exports.down = function(knex) {
  
};
