import React, { useState, useEffect } from "react";
import CrystalRotation from "./CrystalRotation";

export default function Crystals() {
  //create hook for parsing data from data.json
  const [crystals, setCrystals] = useState([]);

  //load data
  useEffect(() => {
    fetch("data/crystals.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCrystals(data);
      });
  }, []);

  //render components to screen
  return (
    <div>
      <CrystalRotation crystals={crystals} />
    </div>
  );
}
