import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3q-A-D6MYRjGyZ9HC5LEfIu4AJ1zUvuo",
  authDomain: "line-clone-ef1bb.firebaseapp.com",
  projectId: "line-clone-ef1bb",
  storageBucket: "line-clone-ef1bb.appspot.com",
  messagingSenderId: "671288655727",
  appId: "1:671288655727:web:a39d5eb6fea9cfcc8cb29a"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };