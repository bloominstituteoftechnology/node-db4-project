
exports.up = async function(knex) {
  const { createTable } = knex.schema
    await createTable("recipes")
            .increments("recipe_id")
        .createTable("ingredients")
            .increments("ingredient_id")
        .createTable("steps")
            .increments("step_id")

};

exports.down = async function(knex) {
  const { dropTableIfExists } = knex.schema
    await dropTableIfExists("recipes")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("steps")
};
