import React, { useState, useEffect, useRef } from "react";
import MusicList from "./MusicList.js";
import PlayWidget from "./PlayWidget.js";

export default function MusicPlayer(props) {
  const [tracks, setTracks] = useState([]);
  const [curPlaying, setCurplaying] = useState({});
  const [curProgress, setCurProgress] = useState();

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
      MUSIC PLAYER
      <div>Now Playing: {curPlaying.title}</div>
      <MusicList
        tracks={tracks}
        curPlaying={curPlaying}
        onSelected={(id) => {
          trackSelected(id);
        }}
      />
      <PlayWidget currentTrack={curPlaying} setCurProgress={setCurProgress} />
    </div>
  );

  //"class methods"
  function trackSelected(id) {
    //find track
    const foundTrack = tracks.find((track) => track.id == id);
    console.log(foundTrack);
    //set as currently selected track - in this component
    setCurplaying(foundTrack);
  }
}