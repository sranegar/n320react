import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import Dialogue from "./Dialogue";

// export default function DialogueDetect() {
//   const [speaker, setSpeaker] = useState("Fred", "Tom");

//   return (
//     <div>
//       <h1>Dialogue Detective</h1>
//       <p>The speaker is {speaker}</p>
//       <button onClick={() => setSpeaker(speaker)}>Next</button>
//     </div>
//   );
// }

export default class DialogueDetect extends React.Component {
  //create an array of components
  state = {
    pages: [<Dialogue />],
    curPage: 0
  };
  render() {
    return (
      <div>
        <h1>Dialogue Detective</h1>
        <Dialogue />
        <button
          onClick={() => {
            this.swapProject(0);
          }}
        >
          Next
        </button>
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}
