
exports.seed = function(knex) {

      return knex('ingredient').insert([
        //pb&j
        {ingredient:'peanut butter'},
        {ingredient:'jelly'},
        {ingredient:'bread'},
        //spaghetti
        {ingredient:'pasta'},
        {ingredient:'oil'},
        {ingredient:'onions'},
        {ingredient:'garlic'},
        {ingredient:'ground beef'},
        {ingredient:'pasta sauce'},
        //burgers
        {ingredient:'ground turkey'},
        {ingredient:'pepper'},
        {ingredient:'himalayan salt'},
        {ingredient:'dijon mustard'},
        {ingredient:'worcestershire'},
        {ingredient:'buns'}
      ]);
};
