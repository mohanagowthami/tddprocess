import ProductStore from "../../ProductStore/index";

const productStore = new ProductStore();
describe(" testing the product model", () => {
  it("testing the state variable changing on clicking", () => {
    productStore.addProducts(id);
    productStore.products[0].onCompareOrRemove();
    expect(productStore.products[0].isCompare).toBe(false);
  });
});
