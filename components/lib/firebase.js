import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDdHBGleS1DfZKhYkSICt1dEqWOHZ9HsOE",
  authDomain: "snapchat-next-redux.firebaseapp.com",
  projectId: "snapchat-next-redux",
  storageBucket: "snapchat-next-redux.appspot.com",
  messagingSenderId: "820374815206",
  appId: "1:820374815206:web:ee9969f2f7fc1af1515627",
  measurementId: "G-BQ09YQ8NN6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export default firebase;
