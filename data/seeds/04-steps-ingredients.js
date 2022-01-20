exports.seed = function (knex, Promise) {
  return knex("steps_ingredients").insert([
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 1, ingredient_id: 2, quantity: 1 },
    { step_id: 1, ingredient_id: 3, quantity: 2 },
    { step_id: 1, ingredient_id: 4, quantity: 3 },

    { step_id: 2, ingredient_id: 5, quantity: 2 },
    { step_id: 2, ingredient_id: 6, quantity: 1 },
    { step_id: 2, ingredient_id: 7, quantity: 20 },
    { step_id: 2, ingredient_id: 8, quantity: 10 },
    { step_id: 2, ingredient_id: 9, quantity: 5 },

    { step_id: 3, ingredient_id: 10, quantity: 3 },

    { step_id: 4, ingredient_id: 11, quantity: 15 },
    { step_id: 4, ingredient_id: 12, quantity: 5 },
    { step_id: 4, ingredient_id: 13, quantity: 25 },
    { step_id: 4, ingredient_id: 14, quantity: 10 },

    { step_id: 5, ingredient_id: 12, quantity: 5 },
    { step_id: 5, ingredient_id: 13, quantity: 25 },
    { step_id: 5, ingredient_id: 14, quantity: 10 },

    { step_id: 6, ingredient_id: 14, quantity: 10 },

    { step_id: 7, ingredient_id: 15, quantity: 5 },
    { step_id: 7, ingredient_id: 16, quantity: 25 },

    { step_id: 8, ingredient_id: 17, quantity: 5 },
    { step_id: 8, ingredient_id: 18, quantity: 25 },
    { step_id: 8, ingredient_id: 19, quantity: 10 },

    { step_id: 9, ingredient_id: 20, quantity: 5 },
    { step_id: 9, ingredient_id: 21, quantity: 25 },
    { step_id: 9, ingredient_id: 22, quantity: 10 },

    { step_id: 10, ingredient_id: 12, quantity: 5 },

    { step_id: 11, ingredient_id: 12, quantity: 5 },
    { step_id: 11, ingredient_id: 20, quantity: 25 },
    { step_id: 11, ingredient_id: 14, quantity: 10 },

    { step_id: 12, ingredient_id: 1, quantity: 5 },
    { step_id: 12, ingredient_id: 13, quantity: 25 },
  ]);
};
