
exports.seed = function(knex) {
  return knex('recipes').insert([
        {name:"1 stick of butter"},
        {name:"2 cups of water"},
        {name:"1 lb of ground beef"}
      ]);
};
