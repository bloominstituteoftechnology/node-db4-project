
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: "olive oil" },
    { ingredient_name: "onion" },
    { ingredient_name: "garlic cloves" },
    { ingredient_name: "chorizo" },
    { ingredient_name: "tomatoes" },
    { ingredient_name: "sugar" },
    { ingredient_name: "gnocchi" },
    { ingredient_name: "mozzarella" },
    { ingredient_name: "basil leaves" },
    { ingredient_name: "green chilli" },
    { ingredient_name: "chicken stock" },
    { ingredient_name: "chicken breast" },
    { ingredient_name: "garam masala" },
    { ingredient_name: "ginger root" },
    { ingredient_name: "celery stick" },
    { ingredient_name: "medium carrot" },
    { ingredient_name: "beef mince" },
    { ingredient_name: "lasagne sheets" },
    { ingredient_name: "parmesan" },
    { ingredient_name: "soy sauce" },
    { ingredient_name: "rice wine vinegar" },
    { ingredient_name: "sticky rice" },
  ]);
};