
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.incre
        })
};

exports.down = function(knex) {
  
};
