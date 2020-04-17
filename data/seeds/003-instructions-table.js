
exports.seed = function(knex) {
  return knex('instructions').insert([
    { 'step':1 , 'instruction': 'In a large skillet over medium heat brown the ground beef. Drain the grease. Add spaghetti sauce and simmer for 5 minutes.'},
    { 'step':2 , 'instruction': 'In a large bowl, mix together the cottage cheese, 2 cups of the mozzarella cheese, eggs, half of the grated Parmesan cheese, dried parsley, salt and ground black pepper.'},
    { 'step':3 , 'instruction': 'To assemble, in the bottom of a 9x13 inch baking dish evenly spread 3/4 cup of the sauce mixture. Cover with 3 uncooked lasagna noodles, 1 3/4 cup of the cheese mixture, and 1/4 cup sauce. Repeat layers once more: top with 3 noodles, remaining sauce, remaining mozzarella and Parmesan cheese. Add 1/2 cup water to the edges of the pan. Cover with aluminum foil.'}, 
    { 'step':4 , 'instruction': 'Bake in a preheated 350 degree F(175 degrees C) oven for 45 minutes. Uncover and bake an additional 10 minutes. Let stand 10 minutes before serving.'},
    { 'step':1 , 'instruction': 'In a medium saucepan, whisk together egg yolks and sugar until well blended. Whisk in milk and cook over medium heat, stirring constantly, until mixture boils. Boil gently for 1 minute, remove from heat and allow to cool slightly. Cover tightly and chill in refrigerator 1 hour.'},
    { 'step':2 , 'instruction': 'In a medium bowl, beat cream with vanilla until stiff peaks form. Whisk mascarpone into yolk mixture until smooth.'},
    { 'step':3 , 'instruction': 'In a small bowl, combine coffee and rum. Split ladyfingers in half lengthwise and drizzle with coffee mixture.'},
    { 'step':4 , 'instruction': 'Arrange half of soaked ladyfingers in bottom of a 7x11 inch dish. Spread half of mascarpone mixture over ladyfingers, then half of whipped cream over that. Repeat layers and sprinkle with cocoa. Cover and refrigerate 4 to 6 hours, until set.'},
    { 'step':1 , 'instruction': 'Place sliced meat into a shallow bowl, and season with salt, black pepper, and crushed red pepper. Squeeze the lime juice over the meat, and turn until evenly coated. Cover, and refrigerate for 30 minutes.'},
    { 'step':2 , 'instruction': 'In a blender or food processor, combine tomatillo and jalapeno. Puree for 15 to 20 seconds, or until thick. Heat 1 tablespoon oil in a large skillet over medium high heat. Carefully pour in tomatillo mixture. Cook, stirring frequently, for 5 minutes. Stir in beef broth. Reduce heat, and simmer for 20 to 30 minutes, or until mixture coats a spoon. Transfer mixture to a serving dish.'},
    { 'step':3 , 'instruction': 'Heat tablespoon oil in a large skillet over high heat. Stir in 1/3 of the beef, and saute for 1 minute. Transfer to serving dish. Repeat with remaining beef. Meanwhile, heat tortillas in the oven or microwave, according to package instructions.'},
    { 'step':4 , 'instruction': 'To serve, place two tortillas on top of each other. Add desired amount of meat, spoon over some tomatillo mixture. Top with onions, tomatoes, avocado and cilantro. Garnish with a wedge of lemon, to be squeezed over taco before eating.'},
  ]);
};
