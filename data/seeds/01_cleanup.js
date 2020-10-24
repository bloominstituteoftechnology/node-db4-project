exports.seed = async function(knex) {
    await knex("ingredients").truncate()
    await knex("recipies").truncate()
    await knex("amount").truncate()
  };