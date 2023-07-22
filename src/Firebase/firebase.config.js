// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIlwJn5n6Y4BK87bLeOQGDH_7VnR9UzAM",
  authDomain: "collegiate-nexus.firebaseapp.com",
  projectId: "collegiate-nexus",
  storageBucket: "collegiate-nexus.appspot.com",
  messagingSenderId: "235640702328",
  appId: "1:235640702328:web:26c2d87314d5508426748d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app