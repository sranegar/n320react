import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Dialogue() {
  //create hook for cards
  const [box, setBox] = useState([]);

  useEffect(() => {
    let characters = ["Billy", "Kyle", "Rhonda"];

    // let characterBox = characters.flatMap((box) => {
    //   return [1, 2, 3].map((val) => {
    //     return box + val; //add to larger array
    //   });
    // });
    console.log(characters);
    setBox(characters);
  }, []);

  //render
  // let boxEls = box.map((box, ind) => {
  //   return <div>{box}</div>;
  // });

  return <div></div>;
}
