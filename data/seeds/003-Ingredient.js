
exports.seed = function(knex) {
  // Deletes ALL existing entries
const ingredients = [
  {
    name: "water"
  },  {
    name: "Honey"
  } , {
    name: "butter"
  }  ,{
    name: "Tea leaves"
  }
]
  return knex('ingredients').insert(ingredients)
};
