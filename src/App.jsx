import { useState } from "react";
import "./App.css";

import getDeadlines from "./firebase.js";

function App() {
  const [user, setUser] = useState();

  getDeadlines();

  return (
    <>
      <div> hello </div>
    </>
  );
}

export default App;
