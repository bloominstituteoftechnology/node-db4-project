exports.seed = async function (knex) {
  await knex('recipes_ingredients').truncate()
  await knex('ingredients').truncate()
  await knex('steps').truncate()
  await knex('recipes').truncate()
};