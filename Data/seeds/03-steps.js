exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("steps")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("steps").insert([
          { step_id: 1, step_text: "add to bowl and mix for 30 seconds", ingredient_id: 2 },
          { step_id: 2, step_text: "rub over item", ingredient_id: 1 },
          { step_id: 3, step_text: "pour into bowl lightly", ingredient_id: 3 },
        ]);
      });
  };