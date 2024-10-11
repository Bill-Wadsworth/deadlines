import { useState } from "react";
import "./App.css";

import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { ListView } from "./listView.jsx";
import { Login } from "./login.jsx";

function App() {
  const [user, setUser] = useState();
  //tracks the user
  onAuthStateChanged(auth, (newUser) => {
    setUser(newUser);
  });
  //routes the app to the login screen if no user logged in
  //otherwise takes the user to view the lists
  return user ? <ListView /> : <Login />;
}

export default App;
