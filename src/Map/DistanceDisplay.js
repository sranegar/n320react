import React from "react";

export default function DistanceDisplay(props) {
  //start with nothing
  let lastLocation = null;
  //produce single number //lookup how reduce works
  let totalDistance = props.locations.reduce((accumulator, location) => {
    let dist = 0; //start at zero

    //accumulate value for distance
    if (lastLocation != null) {
      let dx = location.position.x - lastLocation.position.x;
      let dy = location.position.y - lastLocation.position.y;
      //get distance
      dist = Math.sqrt(dx * dx + dy * dy);
    }

    lastLocation = location;

    return accumulator + dist; //add distance everytime dist is greater than zero
  }, 0);

  //round the distance to a whole number
  totalDistance = totalDistance.toFixed(0);

  return <div>Distance: {totalDistance}</div>;
}
