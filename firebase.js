// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjZmpnBbhZiWXX7wsnNfkTH7w-QzLPDCg",
  authDomain: "translation-104c6.firebaseapp.com",
  databaseURL: "https://translation-104c6-default-rtdb.firebaseio.com",
  projectId: "translation-104c6",
  storageBucket: "translation-104c6.appspot.com",
  messagingSenderId: "603663002046",
  appId: "1:603663002046:web:fde01a958baf4a5a1b71ef",
  measurementId: "G-MBHE63WBPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)

