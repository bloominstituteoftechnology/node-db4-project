
exports.up = function (knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments()
        })
        .createTable('ingredients', table => {
            table.increments()
        })
        .createTable('steps', table => {
            table.increments()
        })
        .createTable('step_ingredients', table => {
            table.increments()
        })
};

exports.down = function (knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
