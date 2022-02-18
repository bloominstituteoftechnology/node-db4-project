exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          ingredients_name: "potatos",
          step_id: "bake at 350 degrees for 20 minutes",
        },
        {
          ingredients_name: "cocoa",
          step_id: "bake at 375 degrees for 30 minutes",
        },
        {
          ingredients_name: "steak",
          step_id: "bake at 400 degrees for 40 minutes",
        },
      ]);
    });
};
