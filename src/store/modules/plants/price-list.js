import waterCapacities from './water-capacities';
import dailyGrowths from './daily-growths';

/**
 * Plant Price List Generator
 *
 * Turn plant's attributes into a price list.
 * This generator takes 2 parameter to adjust the prices.
 *
 * @param {array} a1
 *   An array contain list of water capacities attribute
 *   that a plant may have.
 * @param {array} a2
 *   An array contain list of daily growth attribute
 *   that a plany may have
 */
const generatePriceList = (a1, a2) => {
  // generatePriceList's private variable,
  // TODO: later, this should be from config
  const multiplier = 100;
  const unit = 'Cookies';

  const res = [];
  for (let i = 0; i < a1.length; i += 1) {
    // water capacity
    const wc = a1[i];
    const wcv = a1[i].value;
    const wcn = a1[i].name;

    for (let j = 0; j < a2.length; j += 1) {
      // daily growth
      const dg = a2[j];
      const dgv = a2[j].value;
      const dgn = a2[j].name;

      /**
       * Price List Data Model
       *
       * category: water capacity + daily growth. e.g. "smaller fast"
       * price: generated price based on water cap and growth.
       * cap: water capacity
       * growth: daily growth
       * unit: game currency
       */
      const data = {
        // price category
        category: `${wcn} ${dgn}`,
        price: parseFloat(Math.round(wcv * dgv * multiplier * 100) / 100),
        // cap = water capacity
        cap: wc.cap,
        // growth = daily growth
        growth: dg.growth,
        // price currency
        unit,
      };

      res.push(data);
    }
  }

  return res;
};

// unsorted price list
const unsortedPriceList = generatePriceList(waterCapacities, dailyGrowths);

/**
 * Price list insertion sort
 *
 * @param {array} arr
 *   An array contain unsorted plants price list,
 *   notice the arr[index].price.
 * @return
 *   An array contain sorted plants price list.
 */
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i].price < arr[j].price) {
        const temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  return arr;
};

// sorted price list = final combinations
const priceList = insertionSort(unsortedPriceList);

export default priceList;
