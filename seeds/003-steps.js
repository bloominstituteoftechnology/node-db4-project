
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_text: 'Pour chocolate syrup into glass of milk', step_number: 1, recipe_id: 1},
        {step_text: 'Stir until combined and drink!', step_number: 2, recipe_id: 1},
        {step_text: 'Butter one side of each piece of sliced bread', step_number: 1, recipe_id: 2},
        {step_text: 'Place two pieces of american cheese between sliced bread, butter side out and place in heated skillet on medium heat', step_number: 2, recipe_id: 2},
        {step_text: 'Cook each side until golden brown, about 3min per side. Then enjoy!', step_number: 3, recipe_id: 2},
        
      ]);
    });
};
