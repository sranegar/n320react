import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Dialogue() {
  //create hook for dialogue box 2
  const [box2, setBox2] = useState([]);

  //create hook for character 2
  const [character2, setCharacter2] = useState("Lenny:  ");

  //on page load
  useEffect(() => {
    //create an array of quotes
    let quotes = ["Hey, how are you?", "second quote here"];

    setBox2((character2) + quotes.[0]);
  }, []);

  //render to page
  return (
    <div className="boxWrapper">
      <div className="box2">{box2}</div>
    </div>
  );
}
