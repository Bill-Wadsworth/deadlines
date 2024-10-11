// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

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

//code to deal with the user
const auth = getAuth();

//initialize a data base object to get the values from
const db = getFirestore(app);

async function getDeadlines() {
  console.log("fetching deadlines");
  const user = auth.currentUser;
  if (!user) {
    console.log("No User to get info for!");
    return;
  }
  // Get a reference to the 'deadlines' collection
  const deadlinesRef = collection(db, "deadlines");
  const q = query(
    deadlinesRef,
    where("userId", "==", 1), //SWAP 1 for USERID
    limit(50),
    orderBy("due", "asc"),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
}

export { auth, getDeadlines };
