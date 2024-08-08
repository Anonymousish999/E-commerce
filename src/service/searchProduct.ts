import products from './addProduct';
import { getProductsByCategory } from './addProduct';
import promptSync from "prompt-sync";

const prompt = promptSync();

function displayProducts(products: any) {
    products.forEach((product:any) => {
        console.log(product.getName() + '  ' + product.getPrice() + '  ' + product.getCategory());
    });
}

function deleteProduct() {
    let category = prompt('Enter the category of the product: ');
    let productsByCategory = getProductsByCategory(category);
    console.log('name' + '  ' + 'price' + '  ' + 'category');
    displayProducts(productsByCategory);
    let products1 = products.filter((product:any) => product.getCategory() !== category);
    console.log('After deleting the product:');
    displayProducts(products1);
    
}

deleteProduct();
