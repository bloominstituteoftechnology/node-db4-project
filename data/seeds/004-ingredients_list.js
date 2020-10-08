
exports.seed = function(knex) {
  // Deletes ALL existing entries
  const list =[
    {
      instruction_id: 1,
      ingredient_id: 1,
      ingredient_amount: "1 cup"
    },
    {
      instruction_id: 1,
      ingredient_id: 2,
      ingredient_amount: "1 Tea-Spoon"
    },
    {
      instruction_id: 2,
      ingredient_id: 1,
      ingredient_amount: "1 cup"
    },
    {
      instruction_id: 2,
      ingredient_id: 2,
      ingredient_amount: "1 Tea-Spoon"
    },
    {
      instruction_id: 2,
      ingredient_id: 4,
      ingredient_amount: "1 pinch"
    }
  ]
  return knex('ingredients_list').insert(list)
};
