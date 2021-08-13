exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 200).notNullable().unique()
    })
    .createTable("ingredients", tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredients_name', 200).notNullable().unique()
        tbl.string('ingredient unit', 50)
    })
    .createTable("steps", table => {
        table.increments()
    })
    .createTable("step_ingredients", table => {
        table.increments()
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
