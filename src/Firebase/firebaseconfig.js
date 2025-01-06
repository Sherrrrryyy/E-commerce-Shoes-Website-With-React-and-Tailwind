// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwzFJaonQ_XqbbGREv3qv3xuMxRwxjqF4",
  authDomain: "react-chat-app-d0aa3.firebaseapp.com",
  projectId: "react-chat-app-d0aa3",
  storageBucket: "react-chat-app-d0aa3.firebasestorage.app",
  messagingSenderId: "884382220150",
  appId: "1:884382220150:web:36e34e67ade68415b88457",
  measurementId: "G-T296YG1QSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
    auth,
db,
createUserWithEmailAndPassword
}