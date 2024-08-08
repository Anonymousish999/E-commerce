//import { products } from '.';
//import {Product} from '../model/product';
//import { get } from 'http';
import products from '../db/productDB.json';
import logger from '../logger/logger';


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
export function getProductsByCategory(category: string): any { 
  let product =  products.products.filter((product:any) => product.category === category);
  if(product.length === 0){
    logger.error('No product found in the category');
  }
    return product;
}

//console.log(getProductsByCategory('Fruits'));
//console.log(products.products);


