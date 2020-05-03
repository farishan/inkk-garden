export default {
  addPlant(state, plant) {
    state.plants.push(plant);
  },
  removePlant(state, plant) {
    const newPlants = state.plants.filter((p) => p.id !== plant.id);
    state.plants = newPlants;
  },
};
