exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      return knex('instructions').insert([
        {
          recipe_id: 1,
          instruction_text: 'Put mustard on bread',
          step_number: 1,
        },
        {
          recipe_id: 1,
          instruction_text: 'Put ham and rest of ingredient in',
          step_number: 2,
        },
        {
          recipe_id: 1,
          instruction_text: 'Toast',
          step_number: 3,
        },
        {
          recipe_id: 2,
          instruction_text: 'cook platain into slices',
          step_number: 1,
        },
        {
          recipe_id: 2,
          instruction_text: 'add steak and condiments',
          step_number: 2,
        },
        {
          recipe_id: 2,
          instruction_text: 'Toast',
          step_number: 3,
        },
        {
          recipe_id: 3,
          instruction_text: 'cook steak with cheese together',
          step_number: 1,
        },
        {
          recipe_id: 3,
          instruction_text: 'put steak and condiments on bread',
          step_number: 2,
        },
        {
          recipe_id: 3,
          instruction_text: 'Toast',
          step_number: 3,
        },
      ]);
    });
};
