exports.seed = function(knex,Promise){
    return knex('recipe_book').insert([
        {recipe_book_id:1, recipe_book_name:'Bombay'}
    ]);
};