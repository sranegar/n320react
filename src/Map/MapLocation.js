import React, { useState, useEffect } from "react";
import "./MapStyle.css";

//render svg circles onto screen
export default function MapLocation(props) {
  //create stroke active when circles are selected
  const [active, setActive] = useState(false);

  //give a highlight property
  return (
    <circle
      className="loco"
      strokeWidth={props.active ? 3 : 0} //if true 2, not then zero
      cx={props.position.x}
      cy={props.position.y}
      onClick={props.userSelected}
      r="12"
    />
  );
}
