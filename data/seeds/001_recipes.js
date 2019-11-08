
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Golden French Fries', preptime: '10-12 minutes', servings:'2-4 persons'}, // 1
        {name: 'Cheeseburger', preptime: '15 minutes', servings:'1 person'}, // 2
        {name: 'Large Baked Mac & Cheese', preptime: '45 minutes', servings:'4-8 persons'} // 3
      ]);
};


//name, preptime, servings