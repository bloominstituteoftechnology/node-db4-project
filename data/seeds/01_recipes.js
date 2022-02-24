exports.seed = async function (knex) {
    return await knex('recipes').insert([
      { recipe_name: 'Oatmeal' },
      { recipe_name: 'Sandwich' },
      { recipe_name: 'Cinnamon-sugar toast'},
    ])
  }