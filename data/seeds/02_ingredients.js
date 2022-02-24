exports.seed = async function (knex) {
    return await knex('ingredients').insert([
        { 
            ingredient_name: 'bread' 
        },
        { 
            ingredient_name: 'peanutbutter' 
        },
        { 
            ingredient_name: 'jelly' 
        },
        { 
            ingredient_name: 'rolled oats' 
        },
        { 
            ingredient_name: 'milk' 
        },
        { 
            ingredient_name: 'honey' 
        },
        { 
            ingredient_name: 'cinnamon' 
        },
        { 
            ingredient_name: 'butter' 
        },
        { 
            ingredient_name: 'sugar' 
        }
    ])
  }