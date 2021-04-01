exports.up = function (knex) {
	return knex.schema
		.createTable('steps', (tbl) => {
			tbl.increments('step_id');
			tbl.string('step_name', 128).notNullable().unique();
			tbl.string('step_instructions', 256).notNullable();
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments('ingredient_id');
			tbl.string('ingredient_name', 128).notNullable().unique();
		})
		.createTable('recipes', (tbl) => {
			tbl.increments('recipe_id');
			tbl.string('recipe_name', 128).notNullable().unique();
			tbl.bigint('step_id')
				.unsigned()
				.references('steps.step_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('rec_step_ingr', (tbl) => {
			tbl.increments('rec_step_ingr_id');
			tbl.integer('ingredient_qty').notNullable();
			tbl.integer('step_number').notNullable().unique();
			tbl.bigint('recipe_id')
				.unsigned()
				.references('recipes.recipe_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.bigint('step_id')
				.unsigned()
				.references('steps.step_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.bigint('ingredient_id')
				.unsigned()
				.references('ingredients.ingredient_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('rec_step_ingr')
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps');
};
