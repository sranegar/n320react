import React, { useState, useEffect } from "react";
import MapLocation from "./MapLocation";
import DistanceDisplay from "./DistanceDisplay";

export default function Map() {
  //create hook for parsing data from data.json
  const [locations, setLocations] = useState([]);
  const [selectedPoints, setSelectedPoints] = useState([]);
  //load data
  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((dataObject) => {
        setLocations(dataObject);
      });
  });

  //create hook for svg circle with x,y locations from json object
  const locationEls = locations.map((location) => (
    <MapLocation
      position={location.position}
      key={location.id}
      active={location.active}
      userSelected={() => {
        selectLocation(location); //when clicked
      }}
    />
  ));

  let linesList = [];
  //only draw lines if enough selected
  if (selectedPoints.length > 1) {
    for (var i = 0; i < selectedPoints.length - 1; i++) {
      let p1 = selectedPoints[i].position;
      let p2 = selectedPoints[i + 1].position;
      linesList.push(
        <line x1={p1.x} x2={p2.x} y1={p1.y} y2={p2.y} stroke="black" />
      );
    }
  }

  //set location
  function selectLocation(location) {
    location.active = true;
    setLocations([...locations]); //make copy of array we have and make into new array

    selectedPoints.push(location);
    setSelectedPoints([...selectedPoints]);
    console.log(selectedPoints);
  }

  //render components to screen
  return (
    <div>
      <DistanceDisplay locations={selectedPoints} />
      <svg width="500" height="500">
        {locationEls}
        {linesList}
      </svg>
    </div>
  );
}
