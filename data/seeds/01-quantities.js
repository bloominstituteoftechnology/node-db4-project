exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("quantities")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quantities").insert([
        { quantity: 00 },
        { quantity: 01 },
        { quantity: 02 },
      ]);
    });
};
