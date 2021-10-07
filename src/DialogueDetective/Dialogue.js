import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Dialogue() {
  //create hook for character 1
  const [character1, setCharacter1] = useState("Reggie:  ");
 //create hook for box 2
  const [box1, setBox1] = useState([]);

  //create quotes from character 2
  const [quotes1, setQuotes1] = useState([]);

  //on page load
  useEffect(() => {
    //create an array of quotes
    let quotes  = ["Hello Young GrassHopper...", "How are your teachings?"];

   
    setBox1((character1) + quotes.[0]);
    setQuotes1(quotes);
  }, []);

//render to page
  return (
    <div className="boxWrapper">
      <div className="box1">{box1}</div>
    </div>
  );
}
