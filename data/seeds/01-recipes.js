exports.seed = async knex => {
  await knex("recipes").insert([
    {
      name: "Chocolate Cake",
      description: "A very nice chocolate cake with organic ingredients"
    },
    {
      name: "Tiramisu",
      description: "A delicious tasting cake"
    },
    {
      name: "Cookies",
      description: "Homemade cookies with chocolate chips"
    }
  ]);
};
