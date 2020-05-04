import database from '@/assets/plants.json';
import priceList from './price-list';
import Plant from './plant';

const generatePlants = () => {
  const pl = priceList;
  const result = [];
  // generate final plant database
  for (let i = 0; i < database.length; i += 1) {
    const p = database[i];
    // generate with dynamic data
    const np = new Plant({
      id: i + 1,
      name: p.name,
      imageSeed: p.images[0],
      imageBud: p.images[1],
      image: p.images[2],
      description: p.description,
      category: pl[i].category,
      price: pl[i].price,
      waterCapacity: pl[i].cap,
      dailyGrowth: pl[i].growth,
    });

    result.push(np);
  }
  return result;
};

const plants = generatePlants();

export default plants;
