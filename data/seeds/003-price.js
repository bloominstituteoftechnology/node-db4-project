
exports.seed = function(knex) {
  const prices = [
    {
      price: 5.3,
      ingredient_id: 1
    },
    {
      price: 9,
      ingredient_id: 2
    },
    {
      price: 2.67,
      ingredient_id: 3
    },
    {
      price: 8.43,
      ingredient_id: 4
    },
    {
      price: 10.24,
      ingredient_id: 5
    },
    {
      price: 2.12,
      ingredient_id: 6
    },
    {
      price: 5.00,
      ingredient_id: 7
    },
    {
      price: 6.45,
      ingredient_id: 8
    },
  ]

  return knex("prices").insert(prices);
};