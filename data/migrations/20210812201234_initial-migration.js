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
    .createTable("steps", tbl => {
        tbl.increments('step_id')
        tbl.string('step_text', 200).notNullable()
        tbl.integer('step_number').notNullable()
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

    })
    .createTable("step_ingredients", table => {
        table.increments('step_ingredient_id')
        table.float('quantity').notNullable()
        table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
