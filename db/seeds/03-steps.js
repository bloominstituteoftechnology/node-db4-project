exports.seed = function (knex) {
    return knex("steps")
      .del()
      .then(function () {
        return knex("steps").insert([
          { step_id: 1, step_text: "add to bowl and mix for 30 seconds", ingredient_id: 2 },
          { step_id: 2, step_text: "rub over item", ingredient_id: 1 },
          { step_id: 3, step_text: "pour into bowl lightly", ingredient_id: 3 },
        ]);
      });
  }; 