exports.up = async function (knex) {
	await knex.schema.createTable("section", (table) => {
		table.increments("id");
		table.text("section").notNull().unique();
	});
	await knex.schema.createTable("recipes", (table) => {
		table.increments("id");
		table.text("recipeName").notNull().unique();
		table.integer("sectionId").references("id").inTable("section");
	});

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id");
		table.text("ingredient").notNull();
		table.integer("recipeId").references("id").inTable("recipes");
	});

	await knex.schema.createTable("measurements", (table) => {
		table.increments("id");
		table.float("measurement").notNull();
		table.text("unit");
		table.integer("ingredientId").references("id").inTable("ingredients");
	});

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id");
        table.text("instruction").notNull();
		table.integer("recipeId").references("id").inTable("recipes");
    });
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("instructions");
	await knex.schema.dropTableIfExists("measurements");
	await knex.schema.dropTableIfExists("ingredients");
	await knex.schema.dropTableIfExists("recipes");
	await knex.schema.dropTableIfExists("section");
};
