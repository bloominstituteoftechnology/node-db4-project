exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipes_name: "mac_n_cheese" },
    { recipes_name: "hamburger" },
  ]);
};
