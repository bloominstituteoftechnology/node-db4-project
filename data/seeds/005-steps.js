exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id: 1,
          step_number: 1,
          instruction:
            'Grill the bratwurst until it is well done and slightly brown.',
        },
        {
          recipe_id: 1,
          step_number: 2,
          instruction: 'In the meantime heat the tomatoes but not cook them.',
        },
        {
          recipe_id: 1,
          step_number: 3,
          instruction: 'Apply curry and some spices to your liking.',
        },
        {
          recipe_id: 2,
          step_number: 1,
          instruction: 'Have a form where the lasagna can be stacked into.',
        },
        {
          recipe_id: 2,
          step_number: 2,
          instruction:
            'Insert some of Tomatoes with some added spices to your liking into the form.',
        },
        {
          recipe_id: 2,
          step_number: 3,
          instruction: 'Stack a lasagna noodle plate on top of it.',
        },
        {
          recipe_id: 2,
          step_number: 4,
          instruction: 'Spread some mozzarella over the lasagna.',
        },
        {
          recipe_id: 2,
          step_number: 5,
          instruction:
            'Repeat previous steps until you reached maximum capacity of your form.',
        },
        {
          recipe_id: 2,
          step_number: 6,
          instruction:
            'Spread even more mozzarella cheese over the top of the lasagne.',
        },
        {
          recipe_id: 2,
          step_number: 7,
          instruction: 'Cook in oven until it has a slightly brown crust.',
        },
        {
          recipe_id: 3,
          step_number: 1,
          instruction: 'Have a mixer/blender by hand.',
        },
        {
          recipe_id: 3,
          step_number: 2,
          instruction:
            'Cut the lattice into decent chunks and insert some into the mixer.',
        },
        {
          recipe_id: 3,
          step_number: 3,
          instruction: 'Peel the kiwis and insert them into the mixer.',
        },
        {
          recipe_id: 3,
          step_number: 4,
          instruction: 'Put the arugula into the mixer',
        },
        {
          recipe_id: 3,
          step_number: 5,
          instruction: 'Add the crushed ice into the mixer.',
        },
        {
          recipe_id: 3,
          step_number: 6,
          instruction: 'Put the spinach into the mixer.',
        },
        {
          recipe_id: 3,
          step_number: 7,
          instruction: 'Add some olive oil into the mixer',
        },
        {
          recipe_id: 3,
          step_number: 8,
          instruction:
            '(Optional) Add some water, sirup or limonade into the mixer if you want to.',
        },
        {
          recipe_id: 3,
          step_number: 9,
          instruction:
            'Blend everything and fill the smoothie into a nice looking jar.',
        },
      ]);
    });
};
