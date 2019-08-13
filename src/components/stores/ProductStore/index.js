import getproducts from "../../../fixtures/Products.json";
import ProductModel from "../models/ProductModel/index";
import { observable } from "mobx";
class ProductStore {
  preDefinedProducts = getproducts.products;
  @observable products = [];

  addProducts(id) {
    let index = this.preDefinedProducts.findIndex(product => {
      return product.id == id;
    });
  }
}
export default ProductStore;
