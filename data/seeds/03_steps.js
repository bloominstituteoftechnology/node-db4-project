exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { ingredient_id: 1, step_text: "rowValue1" },
        { ingredient_id: 2, step_text: "rowValue2" },
        { ingredient_id: 3, step_text: "rowValue3" },
      ]);
    });
};
