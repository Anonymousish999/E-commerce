
// import products from './addProduct';
import products from "../db/productDB.json";
import { getProductsByCategory } from './addProduct';
import promptSync from "prompt-sync";
import { Product } from '../model/product';
import logger from "../logger/logger";

const prompt = promptSync();

function displayProducts(products: any) {
  products.forEach((product: any) => {
    console.log(
      product.name +
        "\t" +
        product.price +
        "\t" +
        product.category
    );
  });
  logger.info("Products displayed successfully");
}

let products1 = products.products;

function deleteProduct() {
  let category = prompt("Enter the category of the product: ");
  let productsByCategory = getProductsByCategory(category);
  console.log("name" + "\t\t\t" + "price" + "\t\t\t" + "category");
  logger.info("Products displayed successfully");
  displayProducts(productsByCategory);
  let products2 = products1.filter(
    (product: any) => product.category !== category
  );
  console.log("After deleting the product:");
  logger.info("Product deleted successfully");
  displayProducts(products2);
}

deleteProduct();