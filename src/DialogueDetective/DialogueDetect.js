import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import Dialogue from "./Dialogue";
import Dialogue2 from "./Dialogue2";
import CountClicks from "./CountClicks.js";

export default class DialogueDetect extends React.Component {
  //create an array of components
  state = {
    pages: [<Dialogue />, <Dialogue2 />],
    curPage: 0,
    count: 0,
    zero: 0,
    clicks: 0
    // quotes: ["Quote one", "Quote2"]
  };

  constructor(count) {
    super();
    this.count = count;
  }

  render() {
    return (
      <div className="contentWrapper">
        <h2>You clicked {this.state.count} times</h2>
        {this.state.pages[this.state.curPage]}
        <div className="buttonDiv">
          <button
            className="ddButton"
            onClick={() => {
              this.next();
              this.clicks();
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  next() {
    this.setState({ curPage: this.state.count + 1 });
    console.log(this.state.curPage);
    if (this.state.curPage > 0) {
      this.setState({ curPage: this.state.count });
    }
    // if (this.state.count === 3) {
    //   console.log(count);
    //   console.log("YAY");
    // this.setState({ pages: this.state.pages.[2] })
  }

  clicks() {
    this.setState({ clicks: this.state.zero + 1, zero: this.state.zero + 1 });
    console.log(this.state.clicks);
    if (this.setState.clicks > 2) {
      this.setState({ pages: 3 });
    }
  }
}
