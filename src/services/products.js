import { products } from '../data/products';


const getAll = (categoryId = false) => {

    return new Promise(( resolve, reject ) => {

        setTimeout(() => {
            resolve(categoryId ? products.filter(product => product.category === categoryId) : products);
        }, 2000);

    });

};


const getOne = (id_product) => {

    return new Promise(( resolve, reject ) => {

        setTimeout(() => {
            resolve(products.find(product => product.id == id_product));
        }, 2000);

    });

};


export const productsService = { getAll, getOne };