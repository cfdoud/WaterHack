import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBNy7i2T8InF960cgVGYpxyjd3bwWMtqSo",
    authDomain: "waterhack-2ad1c.firebaseapp.com",
    projectId: "waterhack-2ad1c",
    storageBucket: "waterhack-2ad1c.appspot.com",
    messagingSenderId: "509186396739",
    appId: "1:509186396739:web:138783387c42a34cfc3af6"
};

const app = initializeApp(firebaseConfig);

export { app }

