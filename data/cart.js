export const cart = [];
export function addToCart(productID) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productID === cartItem.productID) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productID,
      quantity: 1,
    });
  }
}
