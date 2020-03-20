
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().index();
        tbl.string('author', 128).notNullable().index();

    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().index();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.text('instructions').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
    })
    .createTable('recipe_requirements', tbl => {
        tbl.increments();
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.float('quantity').notNullable();
        tbl.string('unit').notNullable();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipe_requirements')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
