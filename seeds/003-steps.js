exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          instruction:
            "In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.",
          recipe_id: 1
        },
        {
          step_number: 2,
          instruction:
            "Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust.",
          recipe_id: 1
        },
        {
          step_number: 3,
          instruction:
            "Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.",
          recipe_id: 1
        },
        {
          step_number: 4,
          instruction:
            "Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.",
          recipe_id: 1
        }
      ]);
    });
};
