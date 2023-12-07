# db: recipe_book

## TABLES

### recipes
    - recipe_id - PK
    - recipe_name - unique()


### ingredients
    - ing_id - PK
    - ing_name
    - ing_unit


### steps
    - step_id - PK
    - step_instructions
    - step_order
    - recipe_id - FK


### step_ingredients
    - step_ing_id - PK
    - step_id - FK
    - ing_id - FK
    - quantity