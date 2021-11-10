import React, { useState, useEffect, useRef } from "react";

export default function MusicList(props) {
  let tracksEls = props.tracks.map((track) => (
    <div key={track.id}>{track.title}</div>
  ));

  return <div>{tracksEls}</div>;
}
