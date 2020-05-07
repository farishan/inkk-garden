import { priceConverter } from '../../../utils';

const actions = {
  // Mediator between Shop and Player
  buyPlant({ dispatch, commit }, plant) {
    dispatch('player/checkCookies', plant.price)
    // HACK: garden?? i thought you say this is shop and player mediator??
      .then(() => dispatch('garden/checkEmptySlot'))
      .then((slotIndex) => {
        if (slotIndex || slotIndex === 0) {
          commit('player/addCookies', plant.price * -1);
          dispatch('shop/wrapPlant', plant).then((wrappedPlant) => {
            wrappedPlant.setPosition(slotIndex);
            commit('player/addPlant', wrappedPlant);
            dispatch('alert/show', `${wrappedPlant.name} seed added to garden.`);
            dispatch('sync');
          });
        } else {
          dispatch('alert/show', 'no empty slot.');
        }
      })
      .catch(() => {
        dispatch('alert/show', 'not enough cookies.');
      });
  },
  // eslint-disable-next-line no-empty-pattern
  sellPlant({ state, dispatch, commit }, plant) {
    // get converted price
    const cookiesToAdd = priceConverter(100 - state.config.priceCut, plant.price);
    commit('player/addCookies', cookiesToAdd);
    // remove plant
    dispatch('player/removePlant', plant);
  },
  buyWateringCan({ state, commit, dispatch }, can) {
    // Check if player already have that can
    if (state.player.wateringCanIds.indexOf(can.id) === -1) {
      if (state.player.cookies >= can.price) {
        commit('player/addCookies', can.price * -1);
        dispatch('player/addWateringCan', can.id);
        dispatch('alert/show', `You bought ${can.name}!`);
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
        commit('player/addCookies', price * -1);
        commit('player/addSprinkler');
        dispatch('alert/show', 'You bought Sprinkkler!');
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
        commit('player/addCookies', price * -1);
        commit('player/addCollector');
        dispatch('alert/show', "You bought Ku'Chippi!");
      } else {
        dispatch('alert/show', 'not enough cookies.');
      }
    } else {
      dispatch('alert/show', 'you already have that.');
    }
  },
  unlockNextTier({ dispatch, commit, getters }) {
    // get next tier
    const nextTier = getters['shop/nextTier'];
    const nextTierPrice = nextTier.price;

    dispatch('player/checkCookies', nextTierPrice)
      .then(() => {
        commit('player/addCookies', nextTierPrice * -1);
        dispatch('shop/upgradeTier');
      })
      .catch(() => {
        dispatch('alert/show', 'not enough cookies.');
      });
  },
  unlockTools({ state, commit, dispatch }) {
    dispatch('player/checkCookies', state.shop.unlockToolsPrice)
      .then(() => {
        commit('player/addCookies', state.shop.unlockToolsPrice * -1);
        commit('shop/setToolsLock', false);
      })
      .catch(() => {
        dispatch('alert/show', 'not enough cookies.');
      });
  },
};

export default actions;
