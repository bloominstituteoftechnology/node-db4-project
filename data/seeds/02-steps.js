exports.seed = function (knex, Promise) {
  return knex('steps').insert([
    {
      step_number: '1',
      step_instructions: 'Preheat the oven to 475.',
      recipe_id: '1',
    },
    {
      step_number: '2',
      step_instructions:
        'Lay the pita breads out on baking sheets. Spread tomato sauce, to taste, over each round. Season to taste with the seasoning mix. Sprinkle on cheese and pepperoni as desired.',
      recipe_id: '1',
    },
    {
      step_number: '3',
      step_instructions:
        'Bake for 8 minutes or until the crust is crisp and the cheese is melted and browned in spots.',
      recipe_id: '1',
    },
    {
      step_number: '4',
      step_instructions: 'Serve immediately.',
      recipe_id: '1',
    },
    {
      step_number: '1',
      step_instructions:
        'Spray slow cooker with cooking spray (this is optional, but I like to do it.)',
      recipe_id: '2',
    },
    {
      step_number: '2',
      step_instructions: 'Put frozen potatoes in a slow cooker.',
      recipe_id: '2',
    },
    {
      step_number: '3',
      step_instructions:
        'In a bowl combine sour cream, cream of chicken soup and garlic salt and stir to combine. Pour mixture on top of the potatoes.',
      recipe_id: '2',
    },
    {
      step_number: '4',
      step_instructions:
        'Add cheese to the slow cooker and stir everything together.',
      recipe_id: '2',
    },
    {
      step_number: '5',
      step_instructions:
        'Turn slow cooker on high and cook for 4 hours, then serve and enjoy.',
      recipe_id: '2',
    },
  ]);
};
