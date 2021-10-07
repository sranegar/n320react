import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Dialogue() {
  //create hook for dialogue box 1
  const [character1, setCharacter1] = useState("Reggie:  ");
  const [box1, setBox1] = useState([]);

  useEffect(() => {
    //create an array of quotes
    let quotes = ["Hello Young GrassHopper...", "How are your teachings?"];

    // let characterBox = characters.flatMap((box) => {
    //   return [1, 2, 3].map((val) => {
    //     return box + val; //add to larger array
    //   });
    // });
    console.log(quotes);
    setBox1((character1) + quotes.[0]);
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
