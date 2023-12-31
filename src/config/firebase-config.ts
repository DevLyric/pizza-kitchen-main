// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc9wtIgXp4u-b-BalNDD75lBk-JXLC3y8",
  authDomain: "pizza-kitchen-16f37.firebaseapp.com",
  projectId: "pizza-kitchen-16f37",
  storageBucket: "pizza-kitchen-16f37.appspot.com",
  messagingSenderId: "630293515931",
  appId: "1:630293515931:web:31cfe7dbd8715b077d403e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
