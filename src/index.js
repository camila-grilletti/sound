import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app'
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDygI4QPsbAUe6lCOmlLL_j7tdwqSW54NA",
  authDomain: "sound-f17ea.firebaseapp.com",
  projectId: "sound-f17ea",
  storageBucket: "sound-f17ea.appspot.com",
  messagingSenderId: "1076535003624",
  appId: "1:1076535003624:web:43667bbc312dfc561c3c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
