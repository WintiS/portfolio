// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSLJpnRCUMTUEf3xyhuLxudEtbXYV7pUo",
  authDomain: "portfolio-757e1.firebaseapp.com",
  projectId: "portfolio-757e1",
  storageBucket: "portfolio-757e1.appspot.com",
  messagingSenderId: "533591291921",
  appId: "1:533591291921:web:bd920dac3ef69e1a1899b0",
  measurementId: "G-CSMNF6M5R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
