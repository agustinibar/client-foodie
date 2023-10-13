
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Credentials 
const firebaseConfig = {
  apiKey: "AIzaSyC-Bb1urfKlXTTVkPTgO-gCcsHKaHWtloM",
  authDomain: "foodiesitelab-99c62.firebaseapp.com",
  projectId: "foodiesitelab-99c62",
  storageBucket: "foodiesitelab-99c62.appspot.com",
  messagingSenderId: "195800164351",
  appId: "1:195800164351:web:74dbc6e62e9282c9cca9ca",
  measurementId: "G-XG83CW4362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//all Firestore tools 
export const db = getFirestore(app);
