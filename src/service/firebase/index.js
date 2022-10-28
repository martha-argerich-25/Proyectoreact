// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUaFYpvaEsxkR13kjhYDytkSPFt6dBPsQ",
  authDomain: "backend-proyecto-react.firebaseapp.com",
  projectId: "backend-proyecto-react",
  storageBucket: "backend-proyecto-react.appspot.com",
  messagingSenderId: "530082254673",
  appId: "1:530082254673:web:b30ef6ccbef9b27b548d70"
  };

// Initialize Firebase


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
 