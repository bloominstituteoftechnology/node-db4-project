exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" },
      ]);
    });
};
