"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import products from './addProduct';
const productDB_json_1 = __importDefault(require("../db/productDB.json"));
const addProduct_1 = require("./addProduct");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const logger_1 = __importDefault(require("../logger/logger"));
const prompt = (0, prompt_sync_1.default)();
function displayProducts(products) {
    products.forEach((product) => {
        console.log(product.name +
            "\t" +
            product.price +
            "\t" +
            product.category);
    });
    logger_1.default.info("Products displayed successfully");
}
let products1 = productDB_json_1.default.products;
function deleteProduct() {
    let category = prompt("Enter the category of the product: ");
    let productsByCategory = (0, addProduct_1.getProductsByCategory)(category);
    console.log("name" + "\t\t\t" + "price" + "\t\t\t" + "category");
    logger_1.default.info("Products displayed successfully");
    displayProducts(productsByCategory);
    let products2 = products1.filter((product) => product.category !== category);
    console.log("After deleting the product:");
    logger_1.default.info("Product deleted successfully");
    displayProducts(products2);
}
deleteProduct();
