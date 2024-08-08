"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = getProductsByCategory;
const productDB_json_1 = __importDefault(require("../db/productDB.json"));
// let products = new Array<Product>();
// let product1 = new Product(1, 'Apple', 100, 'Fruit');
// let product2 = new Product(2, 'Earbuds', 200, 'Electronics');
// let product3 = new Product(3, 'Laptop', 300, 'Electronics');
// let product4 = new Product(4, 'Mango', 400, 'Fruit');
// let product5 = new Product(5, 'Shirt', 500, 'Clothing');
// let product6 = new Product(6, 'Trouser', 600, 'Clothing');
// let product7 = new Product(7, 'Orange', 700, 'Fruit');
// let product8 = new Product(8, 'Headphones', 800, 'Electronics');
// let product9 = new Product(9, 'T-shirt', 900, 'Clothing');
// let product10 = new Product(10, 'Jeans', 1000, 'Clothing');
// products.push(product1);
// products.push(product2);
// products.push(product3);
// products.push(product4);
// products.push(product5);
// products.push(product6);
// products.push(product7);
// products.push(product8);
// products.push(product9);
// products.push(product10);
// export default products;
function getProductsByCategory(category) {
    return productDB_json_1.default.products.filter((product) => product.category === category);
}
//console.log(getProductsByCategory('Fruits'));
//console.log(products.products);
