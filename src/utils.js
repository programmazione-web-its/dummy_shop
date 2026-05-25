export function getDiscountedPrice(price, discountPercentage) {
  return Math.round((price - (price * discountPercentage) / 100) * 100) / 100
}

export function addItemToCart(cart, item) {
  const idx = cart.findIndex((el) => el.id === item.id)
  if (idx === -1) return [...cart, { ...item, quantity: 1 }]
  return cart.map((el, i) =>
    i === idx ? { ...el, quantity: el.quantity + 1 } : el,
  )
}

export function removeItemFromCart(cart, id) {
  return cart.filter((el) => el.id !== id)
}
