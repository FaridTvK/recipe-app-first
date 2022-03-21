
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDFy5WrHvovOCSpCUXYawnp2VsQz7z7Ca4",
  authDomain: "react-recipe-f8df6.firebaseapp.com",
  projectId: "react-recipe-f8df6",
  storageBucket: "react-recipe-f8df6.appspot.com",
  messagingSenderId: "1072719214611",
  appId: "1:1072719214611:web:5b428fc9df584f5655a7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}