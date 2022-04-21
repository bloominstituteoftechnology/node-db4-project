
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.text('recipe_name').unique().notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id');
            tbl.text('ingredient_name').notNullable();
            tbl.text('unit_measurement').notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments('step_id');
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.text('instructions').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        })
        .createTable('quantities', tbl => {
            tbl.increments('quantity_id');
            tbl.decimal('quantity')
                .unsigned()
                .notNullable();
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('quantities')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
