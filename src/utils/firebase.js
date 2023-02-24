// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "prj-sound.firebaseapp.com",
  projectId: "prj-sound",
  storageBucket: "prj-sound.appspot.com",
  messagingSenderId: "154001417769",
  appId: "1:154001417769:web:cb3d8816d72c3de7a91e38"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export * from 'firebase/firestore';

export const db = getFirestore()