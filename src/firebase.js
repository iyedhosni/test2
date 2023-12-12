// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

var app;
var storage;

try {
  app = getApp();
} catch (error) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ_EErxAky3kqaffmKgN9chj7emB4tIu4",
  authDomain: "hell-e0d8a.firebaseapp.com",
  databaseURL: "https://hell-e0d8a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hell-e0d8a",
  storageBucket: "hell-e0d8a.appspot.com",
  messagingSenderId: "835257971283",
  appId: "1:835257971283:web:4c769b24747666b92bcca6",
  measurementId: "G-60QLEWM7C3"
};
  };
  app = initializeApp(firebaseConfig);
}
storage = getStorage(app);

// Initialize Firebase

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage };
