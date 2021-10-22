exports.seed = function (knex) {
    return knex('recipe_steps').insert([
      {
        step_num: 1,
        step_instructions: 'Butter 2 slices of bread',
        recipe_id: 1,
      },
      {
        step_num: 2,
        step_instructions: 'Place one slice of bread, butter side down, on skillet set to medium-low heat',
        recipe_id: 1,
      },
      {
        step_num: 3,
        step_instructions: 'Place one slice of cheese on the bread in the skillet, and cover it with the other piece of bread butter side up',
        recipe_id: 1,
      },
      {
        step_num: 4,
        step_instructions: 'flip periodically until bread is golden, slight charring is desirable!',
        recipe_id: 1,
      },
      {
        step_num: 5,
        step_instructions: 'Enjoy with some soup maybe??',
        recipe_id: 1,
      },
      {
        step_num: 1,
        step_instructions: 'Open can of Cambells tomato soup.',
        recipe_id: 2,
      },
      {
        step_num: 2,
        step_instructions: 'Pour can, and one cans worth of water into saucepan on medium-high heat, stir until mixed',
        recipe_id: 2,
      },
      {
        step_num: 3,
        step_instructions: 'Pour in bowl, enjoy with a grilled cheese maybe??',
        recipe_id: 2,
      },
    ])
  } 