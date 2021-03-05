


exports.seed = function(knex) {
  return knex("recipe_ingriedent").insert([
    {recipe_id: 1, ingriedent_id: 1,quantity:2}
  ])
};
