exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients_steps_by_recipe")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients_steps_by_recipe").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" },
      ]);
    });
};
