exports.seed = function(knex) {

  return knex('steps').insert([
    {
      id: 1,
      step_number: 1,
      step_name: 'Melt Water',
      step_instructions: 'Melt butter in a pot and saute garlic',
      recipe_id: 1
    },
    {
      id: 2,
      step_number: 2,
      step_name: 'Puree Tomatoes',
      step_instructions: 'Puree tomatoes in a blender then add to the pot along with some chicken broth.',
      recipe_id: 1
    },
  ]);
};