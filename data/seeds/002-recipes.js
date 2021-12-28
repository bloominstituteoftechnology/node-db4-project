exports.see = function(knex, Promise){
    return knex('recipes').insert([
        {recipe_name: 'French Dip', created_at: '2021-12-27 06:59'},
        {recipe_name: 'Spaghetti', created_at: '2021-12-27 06:59'}
    ])
}