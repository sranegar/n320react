import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Example() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={2000} classNames="my-node">
        <div className="my-node">Test</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
}

// export default function Example() {
//   const [count, setCount] = useState(0);

//   const [displayClass, setDisplayClass] = useState("feedback");

//   //on count changes
//   useEffect(() => {
//     if (count > 3) {
//       setDisplayClass("feedbackMore");
//     }
//   }, [count]);

//   return (
//     <div>
//       <p className={displayClass}>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   );
// }
