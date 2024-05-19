/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	await knex.schema
		.createTable('recipes', (table) => {
			table.increments('recipe_id');
			table.string('recipe_name').notNullable().unique();
		})
		.createTable('steps', (table) => {
			table.increments('step_id');
			table.integer('step_number').unsigned();
			table.string('instruction').notNullable();
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
		})
		.createTable('ingredients', (table) => {
			table.increments('ingredient_id');
			table.integer('ingredient_name');
		})
		.createTable('ingredient_step_info', (table) => {
			table.increments('ingredient_step_info_id');
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			table
				.integer('step_id')
				.unsigned()
				.notNullable()
				.references('step_id')
				.inTable('steps')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			table
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredient_id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			table.decimal('ingredient_quantity');
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
	await knex.schema
		.dropTableIfExists('ingredient_step_info')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes');
};
