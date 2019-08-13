import ProductStore from "./index";
import { italic } from "ansi-colors";
const productStore = new ProductStore();
describe(" testing the productStore function", () => {
  it(" testing products array", () => {
    expect(productStore.preDefinedProducts.length).toBe("4");
  });
});
