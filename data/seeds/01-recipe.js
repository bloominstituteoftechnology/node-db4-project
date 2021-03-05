
exports.seed = function(knex) {
  return knex("recipe").insert([
    {id:1, name: "Pizza"}
  ])
};
