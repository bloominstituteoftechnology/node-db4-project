exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_name: 'box of elbow macaroni' },
      { ingredient_name: 'butter'},
      { ingredient_name: 'all-purpose flour' },
      { ingredient_name: 'salt'},
      { ingredient_name: 'ground black pepper' },
      { ingredient_name: 'milk'},
      { ingredient_name: 'packet of shredded Cheddar cheese' },
      { ingredient_name: 'box of ricotta cheese'},
      { ingredient_name: 'packet of shredded mozzarella cheese' },
      { ingredient_name: 'packet of Parmesan cheese'},
      { ingredient_name: 'egg' },
      { ingredient_name: 'Italian seasoning'},
      { ingredient_name: 'packet of sausage' },
      { ingredient_name: 'jar of marinara sauce'},
      { ingredient_name: 'sausage' },
      { ingredient_name: 'flatbreads'},
    ]);
  };
  