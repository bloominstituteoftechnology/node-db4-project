
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        {Recipe_Id: 1, Step_Number: 1, Instruction: 'Unpack burrito'},
        {Recipe_Id: 1, Step_Number: 2, Instruction: 'Place frozen burrito on plate'},
        {Recipe_Id: 1, Step_Number: 3, Instruction: 'Nuke burrito in microwave'},
        {Recipe_Id: 2, Step_Number: 1, Instruction: 'Place quesadilla on flat top or pan'},
        {Recipe_Id: 2, Step_Number: 2, Instruction: 'Add favorite cheeze'},
        {Recipe_Id: 2, Step_Number: 3, Instruction: 'Heat quesadilla and fold once cheeze is melted'},
        {Recipe_Id: 3, Step_Number: 1, Instruction: 'Place two slices of bred on your finest plate'},
        {Recipe_Id: 3, Step_Number: 2, Instruction: 'Spread the panut butter on the first slice of bread'},
        {Recipe_Id: 3, Step_Number: 3, Instruction: 'Delicately add jelly in a 2:1 ratio with peanut butter'},
        {Recipe_Id: 3, Step_Number: 4, Instruction: 'Smoosh the two pieces of bread together'},
      ]);
    });
};
