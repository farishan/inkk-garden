export default function random(floor, x, y) {
  let result;
  if (floor) {
    result = Math.floor(Math.random() * (y - x + 1)) + x;
  } else {
    result = Math.random() * (y - x + 1) + x;
  }
  return result;
}
