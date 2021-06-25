## knexfile.js
- this allows referential integrity
- cascade (delete everything else that refers to that table) versus restrict (protects data that refers to other data)
- this line allows us to set up foreign keys and set up 

add:

    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done)
        }
    }

## install knex
[] npm install knex --save

[] npm install sqlite3 -- save

## install eslint
[] npm i eslint

## install express
[] npm install express --save

## create a knex file 
- knexfile.js
- this creates a knex file with environments

[] knex init

## install nodemon
[] npm install --save-dev nodemon

## make migration file
[] npx knex migrate:make first-migration

## Create db (?)
npx knex migrate:up    

## seed the migration
[] npx knex seed:run


[] npm install knex-cleaner

npx knex migrate:latest



1) create tables that done have foreign keys first

2) then create the ones that do use foreign keys

3) if you build it first, kill it last


