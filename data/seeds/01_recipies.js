exports.seed = function (knex, Promise) {
  return knex("recipies").insert([
    { recipie_name: "Spaghetti Bolognese" },
    { recipie_name: "Grilled cheese" },
  ]);
};
