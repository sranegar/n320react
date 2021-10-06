import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function AnimLab() {
  //create hook for cards
  const [cards, setCards] = useState([]);

  //on page load or "on mount"
  useEffect(() => {
    //generate cards
    let suits = ["A", "B", "C"];
    //use flatMap to get a flat array instead of 2D array
    let genCards = suits.flatMap((suit) => {
      //create array to return value from a value
      //run this array once for every suit (3x)
      return [1, 2, 3, 4, 5, 6, 7].map((val) => {
        return { val: suit + val, active: true }; //add to larger array
      });
    });
    setCards(genCards);
  }, []);

  //render to page
  let cardEls = cards.map((card, ind) => {
    //create element to stagger
    let delay = ind * 100; //starts at 0 and counts by one
    return (
      <CSSTransition //create csstransition
        key={card.val} //values are unqiue and tied to data //val does that
        appear={true} //play appear animation//if it's created for the first time, should I play animation?
        in={card.active} //is it true or false? looks for if you set during runtime
        timeout={{ enter: delay, exit: 400 }} //you can add object inside of timeout
        classNames="card"
      >
        {/* //wait to start animation withg transitionDelay*/}
        <div
          className="card"
          style={{ transitionDelay: `${delay}ms` }}
          onClick={() => {
            cards[ind].active = false;
            setCards([...cards]); //copy and set data //set modification of old array
          }}
        >
          {card.val}
        </div>
      </CSSTransition>
    );
  });

  return (
    <div>
      <div className="cardStack">{cardEls}</div>
    </div>
  );
}
