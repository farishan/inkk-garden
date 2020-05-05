import { priceConverter } from '../../../utils';

const actions = {
  // Mediator between Shop and Player
  buyPlant({ state, dispatch, commit }, plant) {
    if (state.player.cookies >= plant.price) {
      commit('addCookies', plant.price * -1);
      dispatch('wrapPlant', plant).then((wrappedPlant) => {
        wrappedPlant.setPosition(state.player.plants.length);
        commit('addPlant', wrappedPlant);
        dispatch('sync');
      });
    } else {
      dispatch('alert/show', 'not enough cookies.');
    }
  },
  // eslint-disable-next-line no-empty-pattern
  sellPlant({ state, dispatch, commit }, plant) {
    console.log('sell plant', plant);
    // get converted price
    const cookiesToAdd = priceConverter(100 - state.config.priceCut, plant.price);
    commit('addCookies', cookiesToAdd);
    // remove plant
    dispatch('removePlant', plant);
  },
  buyWateringCan({ state, commit, dispatch }, can) {
    // Check if player already have that can
    if (state.player.wateringCanIds.indexOf(can.id) === -1) {
      if (state.player.cookies >= can.price) {
        commit('addCookies', can.price * -1);
        dispatch('addWateringCan', can.id);
      } else {
        dispatch('alert/show', 'not enough cookies.');
      }
    } else {
      dispatch('alert/show', 'you already have that.');
    }
  },
  buySprinkler({ dispatch, state, commit }, price) {
    // Check if player already bought sprinkler
    if (state.player.sprinkler === null) {
      if (state.player.cookies >= price) {
        commit('addCookies', price * -1);
        commit('addSprinkler');
      } else {
        dispatch('alert/show', 'not enough cookies.');
      }
    } else {
      dispatch('alert/show', 'you already have that.');
    }
  },
  buyCollector({ dispatch, state, commit }, price) {
    // Check if player already bought sprinkler
    if (state.player.collector === null) {
      if (state.player.cookies >= price) {
        commit('addCookies', price * -1);
        commit('addCollector');
      } else {
        dispatch('alert/show', 'not enough cookies.');
      }
    } else {
      dispatch('alert/show', 'you already have that.');
    }
  },
};

export default actions;
