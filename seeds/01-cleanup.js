const {clean} = require("knex-cleaner");

exports.seed = function (knex){
    //Call clean, pass in knex
    return clean(knex, {
        mode: "truncate",
        ignoreTables: ["knex-migrations", "knex-migrations-lock"]
    })
}