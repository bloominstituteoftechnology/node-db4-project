exports.seed = async function(knex) {
    return knex('recipes').insert([   
      { recipe_name: 'Yummy Pizza' },
      { recipe_name: 'Yummy Tacos' }
    ]);
  };
  