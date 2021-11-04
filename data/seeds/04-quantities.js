
exports.seed = function (knex) {
  return knex('quantities').insert([
    { quantity_amount: '12 oz', ingredient_id: 1 },
    { quantity_amount: '4 qts', ingredient_id: 2 },
    { quantity_amount: '1 tbsp', ingredient_id: 3 },
    { quantity_amount: '1/4 cup', ingredient_id: 4 },
    { quantity_amount: '1', ingredient_id: 5 },
    { quantity_amount: '4 oz', ingredient_id: 6 },
    { quantity_amount: '4 oz', ingredient_id: 7 },
    { quantity_amount: '2 tbsp', ingredient_id: 8 }
  ]);
};
