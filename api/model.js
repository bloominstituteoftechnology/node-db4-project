const db = require('../data/db-config.js');

function getSpecies() {
  return db('species');
}

function getAnimals() { // INCLUDING SPECIES NAME
  return db('animals as a')
    .leftJoin('species as s', 's.species_id', 'a.species_id')
    .select('a.animal_id', 'a.animal_name', 's.species_name');
}

async function createAnimal(animal) {
  const [animal_id] = await db('animals').insert(animal);
  return getAnimals().where({ animal_id }).first();
}

function deleteSpecies(species_id) {
  return db('species').where({ species_id }).del();
}

module.exports = {
  getSpecies,
  getAnimals,
  createAnimal,
  deleteSpecies,
};
