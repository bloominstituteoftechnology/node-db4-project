exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', recipes => {
            recipes.increments('recipe_id')
            recipes.string('recipe_name', 200).notNullable().unique()
        })
        .createTable('ingredients', recipes => {
            recipes.increments('ingredient_id')
            recipes.string('ingredient_name', 200).notNullable().unique()
            recipes.string('ingredient_unit', 50)
        })
        .createTable('steps', recipes => {
            recipes.increments('step_id')
            recipes.string('step_next', 200).notNullable()
            recipes.integer('step_number').notNullable()
            recipes.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('step_ingredients', recipes => {
            recipes.increments('step_ingredient_id')
            recipes.float('quantity').notNullable()
            recipes.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            recipes.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
