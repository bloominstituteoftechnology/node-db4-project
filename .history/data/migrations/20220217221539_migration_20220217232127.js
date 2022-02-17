
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes')
};

exports.down = function(knex) {
  
};
