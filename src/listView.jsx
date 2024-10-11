import { useState, useEffect } from "react";
import { getDeadlines } from "./firebase.js";

export function ListView() {
  const [refreshing, setRefreshing] = useState(true);
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    if (!refreshing) {
      return;
    }
    getDeadlines().then((newDeadlines) => {
      setDeadlines(newDeadlines);
      setRefreshing(false);
    });
  }, [refreshing]);

  return (
    <>
      {refreshing ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>Deadlines</div>
          {deadlines.map((deadline) => {
            console.log("here");
            return <div> {deadline.name} </div>;
          })}
          <div> list </div>
        </>
      )}
    </>
  );
}
