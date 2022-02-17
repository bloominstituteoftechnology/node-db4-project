
exports.up = async function(knex) {
    await knex.schema
        .createTable()
};

exports.down = function(knex) {
  
};
