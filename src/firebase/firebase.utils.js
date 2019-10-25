import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzPne6vhuwqvHcua5OKqBMkXQJqkfdAW8",
    authDomain: "e-comerce-shop.firebaseapp.com",
    databaseURL: "https://e-comerce-shop.firebaseio.com",
    projectId: "e-comerce-shop",
    storageBucket: "e-comerce-shop.appspot.com",
    messagingSenderId: "27253860332",
    appId: "1:27253860332:web:90d225c75eb8898112c2c9",
    measurementId: "G-3B52LYX946"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWighGoogle = () => auth.signInWithPopup(provider);

export default firebase;
