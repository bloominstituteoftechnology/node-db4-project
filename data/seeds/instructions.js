
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
      { instruction: 'marinate ground pork in shoyu, mirin, and sesame along with garlic and ginger', step_number: 1, recipe_id: 1},
        { instruction: 'marinate ground pork in shoyu, mirin, and sesame along with garlic and ginger', step_number: 2, recipe_id: 1 },
        { instruction: 'marinate ground pork in shoyu, mirin, and sesame along with garlic and ginger', step_number: 3, recipe_id: 1},
  ])
   
};
