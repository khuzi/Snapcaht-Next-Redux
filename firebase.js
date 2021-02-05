import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdHBGleS1DfZKhYkSICt1dEqWOHZ9HsOE",
  authDomain: "snapchat-next-redux.firebaseapp.com",
  projectId: "snapchat-next-redux",
  storageBucket: "snapchat-next-redux.appspot.com",
  messagingSenderId: "820374815206",
  appId: "1:820374815206:web:ee9969f2f7fc1af1515627",
  measurementId: "G-BQ09YQ8NN6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
