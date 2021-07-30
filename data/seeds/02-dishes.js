exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "chocolate gateaux" },
        { name: "plum pudding" },
        { name: "apple cake" },
      ]);
    });
};
