import React, { useState, useEffect, useRef } from "react";
import MusicList from "./MusicList.js";

export default function PlayWidget(props) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("data/music.json")
      .then((response) => response.json())
      .then((data) => {
        //stub - todo, set data into property
        setTracks(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <MusicList tracks={tracks} />
    </div>
  );
}
