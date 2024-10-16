import { formatCurrency } from "../../scripts/utils/money.js";
describe("test suite: formatCurrency", () => {
  it("converts cent into dolars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2095.5)).toEqual("20.96");
  });
  it("rounds down to the nearest cent", () => {
    expect(formatCurrency(2095.4)).toEqual("20.95");
  });
});

//console.log("test suite: formatCurrency");

//console.log("converts cent into dollars");
//if (formatCurrency(2095) === "20.95") {
//  console.log("passed");
//} else {
//  console.log("failed");
//}
