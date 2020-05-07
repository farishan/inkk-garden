export default {
  resetWateringCans(state) {
    state.wateringCans = [];
    state.wateringCanIds = [];
  },
  addWateringCan(state, can) {
    state.wateringCans.push(can);
    state.wateringCanIds.push(can.id);
  },
  selectWateringCan(state, can) {
    const selectedCan = { ...can };
    selectedCan.water = can.capacity;
    state.selectedCan = selectedCan;
  },
  deselectWateringCan(state) {
    state.selectedCan = null;
  },
  useCan(state) {
    state.selectedCan.water -= 1;
    state.cookies -= 2;
  },
  addSprinkler(state) {
    state.sprinkler = true;
  },
};
