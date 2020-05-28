
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 1, instructions: 'Cook patty for 1 min 15 sec on one side, then 3 minutes on the other side', recipe_id: 1},
        {step: 2, instructions: 'Place cheeze on patty when meat is flipped', recipe_id: 1},
        {step: 3, instructions: 'Toast buns until they are crispy and darken brown', recipe_id: 1},
        {step: 4, instructions: 'Assemble burger together: bottom bun, patty, cheese, top bun', recipe_id: 1}
      ]);
    });
};
