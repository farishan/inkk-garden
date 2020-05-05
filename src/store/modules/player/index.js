/* eslint-disable no-shadow */
import plantActions from './plantActions';
import plantMutations from './plantMutations';
import waterActions from './waterActions';
import waterMutations from './waterMutations';

const state = () => ({
  plants: [],
  wateringCans: [],
  wateringCanIds: [],
  selectedCan: null,
  sprinkler: null,
  collector: null,
  cookies: 10000,
});

const actions = {
  addPlant: plantActions.addPlant,
  removePlant: plantActions.removePlant,
  collect: plantActions.collect,
  hydrate: plantActions.hydrate,
  addWateringCan: waterActions.addWateringCan,
  selectWateringCan: waterActions.selectWateringCan,
  deselectWateringCan: waterActions.deselectWateringCan,
  useCan: waterActions.useCan,
};

const mutations = {
  addPlant: plantMutations.addPlant,
  removePlant: plantMutations.removePlant,
  addWateringCan: waterMutations.addWateringCan,
  selectWateringCan: waterMutations.selectWateringCan,
  deselectWateringCan: waterMutations.deselectWateringCan,
  useCan: waterMutations.useCan,
  addSprinkler: waterMutations.addSprinkler,
  addCollector: (state) => {
    state.collector = true;
  },
  addCookies: (state, value) => {
    state.cookies += value;
  },
};

export default {
  state,
  actions,
  mutations,
};
