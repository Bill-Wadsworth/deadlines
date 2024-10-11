import { useState } from "react";
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUpUser() {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
    });
  }

  function signIn() {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          className="entrybox"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          className="entrybox"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={signIn}> LOG IN</button>
      <button onClick={signUpUser}> SIGN UP </button>
    </div>
  );
}
