const ingredients = [

]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
  };