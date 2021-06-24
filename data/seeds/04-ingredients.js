exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" },
      ]);
    });
};
