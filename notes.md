## Tables

- recipes -> Id, Name, Ingredients, **Ingredient quantity**, Description
- ingredients -> Id, Name, Quantity

## Recipes table
Id     |  name   |  ingredients  | ingredient_quantity |  steps
1      |         |               |                     |  
2      |         |               |                     |  
3      |         |               |                     |  

- Id = integer
- name = string => Required, 256, not nullable, unique
- ingredients = string => Required, 256, not nullable `References Ingredients ID`
- ingredient_quantity = integer => Required, 256, not nullable
- steps = string => Required, 256, not nullable

## Ingredients table

Id     |  name   |
1      |         |
2      |         |
3      |         |

- Id = integer
- name = string => Required, 256, not nullable, unique