
exports.up = async function (knex)
{
    await knex.schema
        .createTable('recipes', table =>
        {
            table.increments('recipes_id');
            table.string('recipe_name', 200).notNullable().unique();
        })
        .createTable('ingredients', table =>
        {
            table.increments('ingredients_id');
            table.string('ingredients_name', 200).notNullable().unique();
            table.string('ingredients_unit', 50);
        })
        .createTable('steps', table =>
        {
            table.increments();
        })
        .createTable('step_ingredients', table =>
        {
            table.increments();
        });

};

exports.down = async function (knex)
{
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
