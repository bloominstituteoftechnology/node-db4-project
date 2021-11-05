
exports.up = function(knex) {
	return knex.schema.createTable('recipes', table => {
		table.increments('recipes_id')
		table.text('recipe_name')
			.unique()
	})
	.createTable('steps', table => {
		table.increments('step_id')
		table.integer('step_number')
		table.integer('recipes_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('recipes')
		table.text('step_instruction')
	})
	.createTable('ingredients', table => {
		table.increments('ingredient_id')
		table.text('ingredient_name')
			.unique()
	})
		.createTable('ingredient_step', table => {
			table.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
			table.integer('step_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('steps')
			table.integer('step_number')
				.unsigned()
				.notNullable()
				.references('step_number')
				.inTable('steps')
	})
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('ingredient_step')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes')
};
