// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNy7i2T8InF960cgVGYpxyjd3bwWMtqSo",
  authDomain: "waterhack-2ad1c.firebaseapp.com",
  projectId: "waterhack-2ad1c",
  storageBucket: "waterhack-2ad1c.appspot.com",
  messagingSenderId: "509186396739",
  appId: "1:509186396739:web:138783387c42a34cfc3af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);