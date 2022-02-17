const { getTableRowCount } = require("knex-cleaner/lib/knex_tables");

exports.up = async function (knex) {
	await knex.schema
		.createTable('recipes', (table) => {
			table.increments('recipe_id');
			table.string('recipe_name', 128).notNull().unique();
		})
		.createTable('ingredients', (table) => {
			table.increments('ing_id');
			table.string('ing_name').notNull().unique();
			table.string('ing_units').notNull();
		})
        .createTable('steps', (table) => {
			table.increments('step_id');
			table.string('step_number').notNull().unique();
			table.text('step_instructions').notNull();
            table
                .integer('recipe_id')
                .unsigned()
                .notNull()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
		})
        .createTable('step_ingredients', (table) => {
			table.increments('step_ing_id');
            table.float('quantity').notNull()
			table
				.integer('step_id')
				.unsigned()
				.notNull()
				.references('step_id')
				.inTable('steps')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.integer('ing_id')
				.unsigned()
				.notNull()
				.references('ing_id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});

};

exports.down = function (knex) {
    return knex.schema.down
        .dropTablefExists
};
