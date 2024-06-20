// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAETcQPDtPRjoZUu034JzBG3rXqMHn0ELQ",
  authDomain: "mern-bookstore-25ee1.firebaseapp.com",
  projectId: "mern-bookstore-25ee1",
  storageBucket: "mern-bookstore-25ee1.appspot.com",
  messagingSenderId: "933965641907",
  appId: "1:933965641907:web:e22547fd3cc3ad179798c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
