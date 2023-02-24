import { db, addDoc, collection, doc, getDoc, getDocs, query, where } from '../utils/firebase'


// Uses the Firebase database


// Returns all products in a given category
const getCategory = async (categoryId = false) => {
    
    const q = query(collection(db, 'items'), where('categoryId', '==', parseInt(categoryId)));
    const snapshot = await getDocs(q);
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return items;

}


// Returns all products
const getAll = async () => {

    const itemsCollection = collection(db, 'items');
    const snapshot = await getDocs(itemsCollection);
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return items;

}


// Returns a single product according to ID
const getOne = async (id) => {

    const itemDoc = doc(db, "items", id);
    const snapshot = await getDoc(itemDoc);
    const item = { id: snapshot.id, ...snapshot.data() };

    return item;

}


// Add a purchase order to the orders collection
const sendOrder = async (productsCart, total) => {

    const items = productsCart.map((e) => {
        return {id: e.id, title: e.title, price: e.price}
    })

    const order = {
        buyer: { name: 'Agustín', phone: 5555, email: 'email@gmail.com' },
        items: items,
        total: total + 2500
    };

    const ordersCollection = collection(db, 'orders');
    const response = addDoc(ordersCollection, order)

    return response;

}


export const productsService = { getOne, getCategory, getAll, sendOrder };