export function getDiscountedPrice(price, discountPercentage) {
  return Math.round((price - (price * discountPercentage) / 100) * 100) / 100
}
