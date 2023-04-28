// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkWmbdjo97OW1QvulZUnmyavFHJCzPY1A",
  authDomain: "myspace-35e70.firebaseapp.com",
  projectId: "myspace-35e70",
  storageBucket: "myspace-35e70.appspot.com",
  messagingSenderId: "899309472083",
  appId: "1:899309472083:web:ee593e4e75b5ddfba1f9a6",
  measurementId: "G-YPQ3PXRYK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);