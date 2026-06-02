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

export function updateItemQuantity(cart, itemId, action) {
  const idx = cart.findIndex((el) => el.id === itemId)
  if (idx === -1) return cart
  const delta = action === 'add' ? 1 : -1
  const updated = { ...cart[idx], quantity: cart[idx].quantity + delta }
  if (updated.quantity <= 0) {
    return [...cart.slice(0, idx), ...cart.slice(idx + 1)]
  }
  return [...cart.slice(0, idx), updated, ...cart.slice(idx + 1)]
}
