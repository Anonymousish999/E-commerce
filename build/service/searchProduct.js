"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addProduct_1 = __importDefault(require("./addProduct"));
const addProduct_2 = require("./addProduct");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function displayProducts(products) {
    products.forEach((product) => {
        console.log(product.getName() + '  ' + product.getPrice() + '  ' + product.getCategory());
    });
}
function deleteProduct() {
    let category = prompt('Enter the category of the product: ');
    let productsByCategory = (0, addProduct_2.getProductsByCategory)(category);
    console.log('name' + '  ' + 'price' + '  ' + 'category');
    displayProducts(productsByCategory);
    let products1 = addProduct_1.default.filter((product) => product.getCategory() !== category);
    console.log('After deleting the product:');
    displayProducts(products1);
}
deleteProduct();
