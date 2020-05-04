import { ID } from '@/utils';
import Plant from './plants/plant';

const actions = {
  wrapPlant({ rootState }, plant) {
    return new Promise((resolve) => {
      const newPlant = new Plant({ ...plant });
      newPlant.id = ID();
      newPlant.boughtAt = rootState.time.periods;
      // console.log('new plant:', newPlant);
      resolve(newPlant);
    });
  },
};

export default {
  actions,
};
