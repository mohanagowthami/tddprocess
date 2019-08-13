import ProductStore from "./index";
const productStore = new ProductStore();
describe(" testing the productStore function", () => {
  it(" testing products array", () => {
    expect(productStore.preDefinedProducts.length).toBe(4);
  });
});
