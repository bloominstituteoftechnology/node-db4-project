
exports.seed = function(knex) {
      return knex('steps').insert([
        {info: 'season meat', recipes_id: 1},
        {info: 'cook meat', recipes_id: 1},
        {info: 'cut hole in loaf', recipes_id: 2},
        {info: 'stuff in bananas', recipes_id: 2},
        {info: 'boil em', recipes_id: 3},
        {info: 'mash em', recipes_id: 3},
        {info: 'stick em in a stew', recipes_id: 3}
      ]);
};
