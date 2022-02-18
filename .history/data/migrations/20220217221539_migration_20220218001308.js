exports.up = async function (knex) {
	await knex.schema
		.createTable('recipes', (table) => {
			table.increments('recipe_id');
			table.string('recipe_name', 128).notNull().unique();
		})
		.createTable('ingredients', (table) => {
			table.increments('ingredient_id');
			table.string('ingredient_name', 128).notNull().unique();
			table.string('ingredient_unit', 24).notNull();
		})
		.createTable('steps', (table) => {
			table.increments('step_id');
			table.integer('step_number').notNull();
			table.text('step_instructions', 512).notNull();
			table
				.integer('recipe_id')
				.unsigned()
				.notNull()
				.references('recipe_id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('step_ingredients', (table) => {
			table.increments('step_ingredient_id');
			table.float('quantity').notNull();
			table
				.integer('step_id')
				.unsigned()
				.notNull()
				.references('step_id')
				.inTable('steps')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.integer('ingredient_id')
				.unsigned()
				.notNull()
				.references('ingredient_id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema.down
		.dropTableIfExists('step_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
