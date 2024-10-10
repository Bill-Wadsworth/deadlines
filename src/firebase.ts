// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpz-LGwEyNihwDbez1lxlvuso2Q-aOc1Y",
  authDomain: "deadlines-2b825.firebaseapp.com",
  projectId: "deadlines-2b825",
  storageBucket: "deadlines-2b825.appspot.com",
  messagingSenderId: "966936292564",
  appId: "1:966936292564:web:ec53b58007e7d4d1f69f41",
  measurementId: "G-422XQHKTQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
