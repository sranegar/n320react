import React, { useState, useEffect } from "react";
import "./CrystalStyle.css";

//render svg circles onto screen
export default function CrystalRotation(props) {
  //create stroke active when circles are selected
  let crystalEls = props.crystals.map((crystal) => (
    <div key={crystal.id}>
      {crystal.name}
      {crystal.purpose}
    </div>
  ));

  //give a highlight property
  return <div>{crystalEls}</div>;
}
