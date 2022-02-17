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
        .createTable('zoo_animals', (table) => {
			table.increments('zoo_animal_id');
			table
				.integer('zoo_id')
				.unsigned()
				.notNull()
				.references('zoo_id')
				.inTable('zoos')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			table
				.integer('animal_id')
				.unsigned()
				.notNull()
				.references('animal_id')
				.inTable('animals')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
		});

};

exports.down = function (knex) {};
