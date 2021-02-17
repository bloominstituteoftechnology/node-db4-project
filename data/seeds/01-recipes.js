exports.seed = function (knex) {
    return knex("recipes")
        .truncate()
        .then(function () {
            return knex("recipes").insert([
                { recipe_name: "Cuban" },
                { recipe_name: "Jibarito" },
                { recipe_name: "Chopped Cheese" },
            ]);
        });
};
