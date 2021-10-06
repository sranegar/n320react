import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import Dialogue from "./Dialogue";

export default class DialogueDetect extends React.Component {
  //create an array of components
  state = {
    pages: [<Dialogue />, <Dialogue2 />],
    curPage: 0,
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Dialogue Detective</h1>
        <Dialogue />
        <button
          onClick={() => {
            this.next();
          }}
        >
          Next
        </button>
      </div>
    );
  }

  next() {
    this.setState({ curPage: this.state.count + 1 });
    console.log(curPage);
    if (this.state.curPage > 0) {
      this.setState({ curPage: this.state.count });
    }
  }
}
