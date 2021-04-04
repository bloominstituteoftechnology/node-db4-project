exports.seed = function(knex,Promise){
    return knex('recipes').insert([
        
        {recipe_id:1,recipe_name:"Brownies",  created_at:"2020-09-01 09:45:19.120"},
        {recipe_id:2,recipe_name:"Potato Soup",  created_at:"2010-05-10 02:30:56.125"},
        {recipe_id:3,recipe_name:"Tomato Soup",  created_at:"2000-11-13 07:12:36.122"},
        {recipe_id:4,recipe_name:"Rice",  created_at:"2012-09-01 02:14:52.90"},
        {recipe_id:5,recipe_name:"Spaghet",  created_at:"2008-09-01 08:02:32.80"},
        {recipe_id:6, recipe_name:"Cereal", created_at:"1994-09-01 03:45:19.110"},
        {recipe_id:7,recipe_name:"Alfredo",  created_at:"2021-10-31 12:38:36.100"},
    ])
}