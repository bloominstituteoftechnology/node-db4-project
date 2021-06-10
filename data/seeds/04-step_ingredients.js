
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {
          step_id: '1',
          ingredient_id: '5',
          ingredient_quantity: '5oz'
        },
        {
          step_id: '2',
          ingredient_id: '1',
          ingredient_quantity: '4oz'
        },
        {
          step_id: '3',
          ingredient_id: '2',
          ingredient_quantity: '1'
        },
        {
          step_id: '4',
          ingredient_id: '3',
          ingredient_quantity: '3'
        },
        {
          step_id: '5',
          ingredient_id: '4',
          ingredient_quantity: '2'
        },
        {
          step_id: '6',
          ingredient_id: '2',
          ingredient_quantity: '1'
        },
        {
          step_id: '7',
          ingredient_id: '2',
          ingredient_quantity: '2'
        },
        {
          step_id: '9',
          ingredient_id: '7',
          ingredient_quantity: '1'
        },
        {
          step_id: '11',
          ingredient_id: '6',
          ingredient_quantity: '1tbs'
        }
      ]);
    });
};
