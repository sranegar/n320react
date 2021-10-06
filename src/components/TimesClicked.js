import React, { useState, useEffect } from "react";

export default function TimesClicked() {
  //declare a new state variable which we'll call "count"

  const [count, setCount] = useState(0);

  const [displayClass, setDisplayClass] = useState("feedback");

  //on count changes
  useEffect(() => {
    if (count > 3) {
      setDisplayClass("feedbackMore");
    }
  }, [count]);

  return (
    <div>
      <p className={displayClass}>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
