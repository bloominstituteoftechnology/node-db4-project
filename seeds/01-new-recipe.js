exports.seed = function (knex) {

  return knex('recipes').insert([{
      name: 'soup'
    },
    {
      name: 'meat balls'
    },
    {
      name: 'egg and chips'
    }
  ]);

};