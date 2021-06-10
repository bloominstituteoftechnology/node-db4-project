
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_text: 'pour cereal in bowl',
          step_number: '1',
          recipe_id: '1'
        },
        {
          step_text: 'add milk',
          step_number: '2',
          recipe_id: '1'
        },
        {
          step_text: 'get bread slice',
          step_number: '1',
          recipe_id: '2'
        },
        {
          step_text: 'put ham on bread',
          step_number: '2',
          recipe_id: '2'
        },
        {
          step_text: 'put cheese on ham',
          step_number: '3',
          recipe_id: '2'
        },
        {
          step_text: 'put second slice of bread on cheese',
          step_number: '4',
          recipe_id: '2'
        },
        {
          step_text: 'cut the bread real good like',
          step_number: '1',
          recipe_id: '3'
        },
        {
          step_text: 'throw bread into the TOASSTORRRR',
          step_number: '2',
          recipe_id: '3'
        },
        {
          step_text: 'use big boi knife to cut avocado',
          step_number: '3',
          recipe_id: '3'
        },
        {
          step_text: 'squeeesh avocado onto bread',
          step_number: '4',
          recipe_id: '3'
        },
        {
          step_text: 'dump some paprika on that binch',
          step_number: '5',
          recipe_id: '3'
        }
      ]);
    });
};
