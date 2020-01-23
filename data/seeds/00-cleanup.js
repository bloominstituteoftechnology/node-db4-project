exports.seed = async knex => {
  await knex("steps").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
