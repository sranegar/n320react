import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Dialogue() {
  //create hook for cards
  const [box1, setBox1] = useState([]);

  useEffect(() => {
    let quotes = ["Hello Young GrassHopper..."];

    // let characterBox = characters.flatMap((box) => {
    //   return [1, 2, 3].map((val) => {
    //     return box + val; //add to larger array
    //   });
    // });
    console.log(quotes);
    setBox1(quotes);
  }, []);

  //render
  // let boxEls = box.map((box, ind) => {
  //   return <div>{box}</div>;
  // });

  return (
    <div className="boxWrapper">
      <div className="box1">{box1}</div>
    </div>
  );
}