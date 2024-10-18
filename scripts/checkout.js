import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { /*loadProducts,*/ loadProductsFetch } from "../data/products.js";
//import '../data/cart-class.js';
//import "../data/backend-practice.js";

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    resolve();
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});*/

/**loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
}); */
