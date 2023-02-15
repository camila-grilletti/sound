import { products } from '../data/products';


const getAll = (categoryId = false) => {

    return new Promise(( resolve, reject ) => {

        setTimeout(() => {
            resolve(categoryId ? products.filter(product => product.category === categoryId) : products);
        }, 0);

    });

};


const getOne = (id_product) => {

    return new Promise(( resolve, reject ) => {

        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(id_product)));
        }, 1000);

    });

};


export const productsService = { getAll, getOne };