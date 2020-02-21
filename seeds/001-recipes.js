exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          title: "Homemade Apple Pie",
          description:
            "Get this awesome grandmother applie pie to take you back to the country"
        },
        {
          title: "Jamaican Jerk Chicken",
          description: "Spice up your day with this flavor filled recipe"
        }
      ]);
    });
};
