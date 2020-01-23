exports.seed = async knex => {
  await knex("ingredients").truncate();
  await knex("ingredients_recipes").truncate();
  await knex("steps").truncate();
  await knex("recipes").truncate();
};
