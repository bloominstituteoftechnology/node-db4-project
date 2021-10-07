# Backend Setup Using Express

## Install base Dependencies 
1. npm i node
2. npx gitignore node
3. npm init -y (creates JSON file)
4. npm i express
5. npm i -D nodemon (-D means loaded under devDependencies)
6. npm i -g fkill-cli (example use => fkill:500)
7. npm i -D eslint
   1. npx eslint --init
      1. problems
      2. common js
      3. none
      4. no
      5. node
      6. json
      7. yes (eslint)
8. As Needed install
   1. npm i cors
   2. npm i helmet
   3. npm i dotenv (add .env file inside put PORT=5000 and NODE_ENV=developement)
9. npm i sqlite3

## KNEX files
10.  npm i knex or npm i -g knex (for globla)
    1.  in package.json add 
        1.  "cleanup": "knex seed:run --specific=01-cleanup.js",
        2.  "migrate": "knex migrate:latest",
        3.  "rollback": "knex migrate:rollback",
        4.  "reset": "npm run rollback && npm run migrate && npm run seed",
        5.  "seed": "knex seed run"
    2.  npm i -D knex-cleaner
    3.  knex init
    4.  knex migrate:make create-<name>-table
    5.  knex migrate latest (later user "knex migrate:rollback" as needed)
    6.  knex seed:make <01-users> put your name choice inside <...>
    7.  knex seed:run

## Install base FILES & FOLDERS
Here you are scafolding the base Express aplication then worry about database items
11. Root folder files
    1.  chart.drawio
    2.  index.js
    3.  knexfile.js
    4.  .env (if not done above)
12. Other folders with other folders or files in them 
    1.  api folder
        1.  server.js file
        2.  resource folder custom! Examples: recipes or cars or users etc
            1.  customName-router.js file
            2.  customName-model.js file
            3.  customName-middleware.js file

## Build out base files guts
13. index.js
14. server.js
15. router.js

## Set Up Debugger
16. start debugger
    1.  select "Creat a launch.json file."
    2.  selctt node.js from the drop down list
    3.  review line 14 is \\index.js or appropriate for project
    4.  add debugger to gitignore file
        1.  on last line of .gitignore add ".vscode"
    5.  press f5 to start debugger
    6.  remember to restart it after each code change. 