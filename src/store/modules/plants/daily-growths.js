// https://www.tiger-algebra.com/drill/5,20,35,50/
// General Form: an=a1+(n-1)d
// growth is percent. 100 mean the plant is ready to harvest
// value is the amount of water to consume, to grow by growth,
// ex: slower plant consume 50 water to grow by 5 percent

// Array length depend on plant database length.
// Current database contain 16 plants,
// 16 = daily growths length * water capacity length
// daily growths length = 16/water capacity length

const dailyGrowths = [
  {
    name: 'slower',
    growth: 5,
    value: 50,
  },
  {
    name: 'slow',
    growth: 20,
    value: 35,
  },
  {
    name: 'fast',
    growth: 35,
    value: 20,
  },
  {
    name: 'faster',
    growth: 50,
    value: 5,
  },
];

export default dailyGrowths;
