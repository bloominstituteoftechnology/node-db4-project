
exports.seed = function(knex) {
  return knex('recipes').insert([
        {name:"chocolate chip cookies", description:"Mom's old recipe"},
        {name:"spaghetti and meatballs", description:"CLASSIC DISH!!"},
      ]);
    };
