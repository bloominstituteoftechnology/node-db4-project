
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            
        })
};

exports.down = function(knex) {
  
};
