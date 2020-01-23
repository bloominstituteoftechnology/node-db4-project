exports.seed = async knex => {
  await knex("ingredients").insert([
    {
      name: "coco",
      recipe_id: 2,
      quantities: "12.3gs"
    },
    {
      name: "berries",
      recipe_id: 1,
      quantities: "1.1mg"
    },
    {
      name: "milk",
      recipe_id: 2,
      quantities: "1L"
    }
  ]);
};
