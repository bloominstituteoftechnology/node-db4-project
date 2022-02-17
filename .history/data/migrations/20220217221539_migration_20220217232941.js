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
		});
        .createTable('steps', (table) => {
			table.increments('step_id');
			table.string('step_number').notNull().unique();
			table.text('step_instructions').notNull();
            table
                .integer()
		});
};

exports.down = function (knex) {};
