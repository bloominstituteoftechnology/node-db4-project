exports.seed = function(knex) {
    return knex('recipes').truncate()
    .then(function () {
      return knex('steps').insert([   
        { step_number: 1, step_instructions: 'Place a large pan on medium heat', recipe_id: 1 },
        { step_number: 2, step_instructions: 'Fill a pot up with water and boil on medium/high heat.', recipe_id: 1 },
        { step_number: 3, step_instructions: 'Place uncooked chicken breast in large pan', recipe_id: 1 },
        { step_number: 4, step_instructions: 'Put uncooked noodles in boiling water.', recipe_id: 1 },
        { step_number: 5, step_instructions: 'Once noodles and chicken are done cooking, add together with sauce and stir.', recipe_id: 1 },
      ]);
    });
  };