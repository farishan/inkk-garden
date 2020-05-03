export default function convertPrice(percent, p) {
  return p - ((p * (100 - percent)) / 100);
}
