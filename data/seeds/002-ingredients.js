
exports.seed = function(knex) {
  return knex('ingredients').insert([
        {name:"stick of butter"},
        {name:"cup of water"},
        {name:"pound of ground beef"}
      ]);
};
