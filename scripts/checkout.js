import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { /*loadProducts,*/ loadProductsFetch } from "../data/products.js";
//import '../data/cart-class.js';
//import "../data/backend-practice.js";

/*
async function loadPage() {
  console.log("load page");
  await loadProductsFetch();
  await new Promise((resolve)=>{
      resolve();
  });
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage(); */

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
