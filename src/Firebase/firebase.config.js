// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyA2izK0HQWgsiJzWHDA6U8H-xpOhPYI3tM",
  authDomain: "college-bd-c8e6a.firebaseapp.com",
  projectId: "college-bd-c8e6a",
  storageBucket: "college-bd-c8e6a.appspot.com",
  messagingSenderId: "243838170365",
  appId: "1:243838170365:web:01bca08bd614baec96fa94"
};
const app = initializeApp(firebaseConfig);
  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app
