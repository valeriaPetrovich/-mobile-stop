import { initializeApp } from "firebase/app";

// import {
//   getFirestore,
//   collection,
//   getDocs,
// } from "firebase/firestore";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkWmbdjo97OW1QvulZUnmyavFHJCzPY1A",
  authDomain: "myspace-35e70.firebaseapp.com",
  projectId: "myspace-35e70",
  storageBucket: "myspace-35e70.appspot.com",
  messagingSenderId: "899309472083",
  appId: "1:899309472083:web:ee593e4e75b5ddfba1f9a6",
  measurementId: "G-YPQ3PXRYK3"
};

  const firebaseApp = initializeApp(firebaseConfig);

  export const createUser = async (email:any, password:any) => {
    return createUserWithEmailAndPassword(getAuth(firebaseApp), email, password);
  }
  
  export const signInUser = async (email:any, password:any) => {
    return signInWithEmailAndPassword(getAuth(firebaseApp), email, password);
  }

  // const db = getFirestore(firebaseApp);
  // export const commentsCol = collection(db, "comment");

  // export const getComments = async () => {
  //   const comments = [];
  //   const querySnapshot = await getDocs(commentsCol);
  //   querySnapshot.forEach((doc) => {
  //     comments.push(doc.data());
  //   });
  //   return comments
  // }

