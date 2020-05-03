// cap: plant's water capacity
// value ??? I forgot the calculation

const waterCapacities = [
  {
    name: 'smaller',
    // cap: 1*multiplier,
    // nanti akan di-multiply cap nya via generator
    cap: 1,
    value: 5,
  },
  {
    name: 'small',
    cap: 2.333,
    value: 3.666,
  },
  {
    name: 'large',
    cap: 3.666,
    value: 2.333,
  },
  {
    name: 'larger',
    cap: 5,
    value: 1,
  },
];

export default waterCapacities;
