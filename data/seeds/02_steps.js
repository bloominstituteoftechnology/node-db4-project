exports.seed = function(knex) {
  return knex('steps')
    .truncate()
    .then(function () {
      return knex('steps')
        .insert([
          { 
            'recipe_id': 1, 
            'step_number': 1, 
            'step_instructions':
              'Put coconut oil in large covered pot; add popcorn kernels',
          },
          {
            'recipe_id': 1,
            'step_number': 2,
            'step_instructions':
              'Put on stove + turn heat on to medium-high; wait for popping sounds',
          },
          {
            'recipe_id': 1,
            'step_number': 3,
            'step_instructions':
              'While popcorn is popping, shake pot periodically to prevent sticking + burning',
          },
          {
            'recipe_id': 1, 
            'step_number': 4,
            'step_instructions':
              'When popcorn is finished popping, dump into large bowl; '
               +'spray liberally with water + salt with SOME of the Lawry\'s; '
               +'mix bowl with hands and repeat until Lawry\'s is gone; serve',
          },
          {
            'recipe_id': 2,
            'step_number':1,
            'step_instructions':
              'Rinse potatoes',
          },
          {
            'recipe_id': 2,
            'step_number': 2,
            'step_instructions':
              'Stab each potato at least 6 times in 6 different locations with a fork'
                +' as far as the tines will go in',
          },
          {
            'recipe_id': 2,
            'step_number': 3,
            'step_instructions':
              'Arrange potatoes in center of microwave',
          },
          {
            'recipe_id': 2,
            'step_number': 4,
            'step_instructions':
              'Cook for 6 minutes',
          },
          {
            'recipe_id': 2,
            'step_number': 5,
            'step_instructions':
              'If potatoes are cooked, remove; otherwise keep cooking for 2-minute'
              +' intervals until cooked',
          },
          {
            'recipe_id': 2,
            'step_number': 6,
            'step_instructions':
              'Cut potatoes; season with Lawry\'s and serve with ketchup',
          },
          {
            'recipe_id': 3, 
            'step_number': 1,
            'step_instructions':
              'Stick bread in toaster',
          },  
          {
            'recipe_id': 3,
            'step_number': 2,
            'step_instructions':
              'When done, WAIT FOR BREAD TO DRY -' +
              ' setting the slices up against each other in a "tent"' + 
              ' formation may speed this',
          },
          {
            'recipe_id': 3,
            'step_number': 3,
            'step_instructions':
              'Spread 1 tbsp peanut butter on each slice of bread',
          },
          {
            'recipe_id': 3,
            'step_number': 4,
            'step_instructions':
              'Stick slices together; cut once vertically; serve'
          },
        ]);
    }); };
