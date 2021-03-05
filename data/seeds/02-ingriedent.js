
exports.seed =  function(knex) {
  return knex("ingriedent").insert([
    {id: 1, name: "spise"}
    
  ])
};
