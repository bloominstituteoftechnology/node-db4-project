exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { name: "eggs" },
        { name: "olve oil" },
        { name: "bacon" },
      ]);
    });
};
