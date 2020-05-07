export default {
  addPlant(state, plant) {
    state.plants.push(plant);
  },
  removePlant(state, plant) {
    const newPlants = state.plants.filter((p) => p.id !== plant.id);
    state.plants = newPlants;
  },
  resetPlants(state) {
    state.plants = [];
  },
  setPlants(state, plants) {
    state.plants = plants;
  },
};
