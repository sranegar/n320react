import React, { useState, useEffect, useRef } from "react";

export default function MusicPlayer(props) {
  return (
    <div>
      <svg>
        <circle r={props.size} cx="100" cy="100" fill="#ebcd49" />

        <circle
          r={props.progress * props.size}
          cx="100"
          cy="100"
          fill="#7a10de"
        />
      </svg>
    </div>
  );
}
