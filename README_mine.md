1.) Ran `npm init -y` to generate package.json
2.) Installed modules needed to get going: Express, Nodemon (as -D), cors and helmet 
3.) Server set up: Add a server script (package.json) to include nodemon (index.js)
4.) Made an api folder with a server.js file in it, make an index.js in the root 
5.) Set up the server file to run modules, and send a basic greeting on connection with Postman, set up index to import router and assign the port. Saw successful GET message response in Postman. 
6.) Install Knex locally and globally, along with SQLite3 
7.) Create a data folder with a db-config file in it - set up Knex inside 
8.) Run knex init in root, update the development object
9.) Set up db-config.js with knex, imported into server.js
10.) Ran 'knex migrate:make recipes-table' a file was generated in the migrations folder -> set this up to create the recipes table: 
field: primary key, auto generates 
field: recipe name, not nullable
field: recipe instructions, not nullable 
11.) ran 'knex migrate:make latest' to create recipes.db3 

