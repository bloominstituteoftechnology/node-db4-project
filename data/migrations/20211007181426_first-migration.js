
exports.up = async function (knex) {
    await knex.schema.createTable('table_name', table => {

    })

    await knex.schema.createTable('table_name', table => {

    })

    await knex.schema.createTable('table_name', table => {

    })

    await knex.schema.createTable('table_name', table => {

    })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('')
        .dropTableIfExists('')
        .dropTableIfExists('')
        .dropTableIfExists('')
};
