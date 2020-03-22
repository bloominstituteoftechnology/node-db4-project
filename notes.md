## Tables

- recipes -> Id, Name, Ingredients (contains name and quantity), Description
- ingredients -> Id, Name
- ingredients_by_recipe -> recipe_id, ingredient_id, quantity

## recipes table
Id     |  name   |  ingredients  |  steps
1      |         |               |   
2      |         |               |
3      |         |               |

- Id = integer
- name = string => Required, 256, not nullable, unique
- ingredients = string => Required, 256, not nullable `References ingredients_by_recipe using it's id`
- steps = string => Required, 256, not nullable

## ingredients table
Id     |  name   |
1      |         |
2      |         |
3      |         |

- Id = integer
- name = string => Required, 256, not nullable, unique

## ingredients_by_recipe table

recipe_id   |  ingredient_id   |  quantity
1           |                  |
2           |                  |
3           |                  |

recipe_id = integer -> references `id` on the recipe `table`
ingredient_id = integer -> references `id` on the ingredient `table`
quantity = float
