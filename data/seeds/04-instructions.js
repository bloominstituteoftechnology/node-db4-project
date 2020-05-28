
exports.seed = function(knex) {
      return knex('instructions').insert([
        {step: 1, instruction: 'Cook patty for 1 min 15 sec on one side, then 3 minutes on the other side', recipe_id: 1},
        {step: 2, instruction: 'Place cheeze on patty when meat is flipped', recipe_id: 1},
        {step: 3, instruction: 'Toast buns until they are crispy and darken brown', recipe_id: 1},
        {step: 4, instruction: 'Assemble burger together: bottom bun, patty, cheese, top bun', recipe_id: 1}
      ]);
};
