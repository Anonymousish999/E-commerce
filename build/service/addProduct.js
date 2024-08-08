"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = getProductsByCategory;
const product_1 = require("../model/product");
let products = new Array();
let product1 = new product_1.Product(1, 'Apple', 100, 'Fruit');
let product2 = new product_1.Product(2, 'Earbuds', 200, 'Electronics');
let product3 = new product_1.Product(3, 'Laptop', 300, 'Electronics');
let product4 = new product_1.Product(4, 'Mango', 400, 'Fruit');
let product5 = new product_1.Product(5, 'Shirt', 500, 'Clothing');
let product6 = new product_1.Product(6, 'Trouser', 600, 'Clothing');
let product7 = new product_1.Product(7, 'Orange', 700, 'Fruit');
let product8 = new product_1.Product(8, 'Headphones', 800, 'Electronics');
let product9 = new product_1.Product(9, 'T-shirt', 900, 'Clothing');
let product10 = new product_1.Product(10, 'Jeans', 1000, 'Clothing');
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
products.push(product9);
products.push(product10);
exports.default = products;
function getProductsByCategory(category) {
    return products.filter((product) => product.getCategory() === category);
}
