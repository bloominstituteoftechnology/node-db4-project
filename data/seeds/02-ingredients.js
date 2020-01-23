exports.seed = async knex => {
  await knex("ingredients").insert([
    {
      name: "coco",
      quantities: "12.3gs"
    },
    {
      name: "berries",
      quantities: "1.1mg"
    },
    {
      name: "milk",
      quantities: "1L"
    }
  ]);
};
