import React, { useState } from "react";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

export default function UpdateList() {
  return (
    <div>
      <Typography variant="h5">Slider Practice</Typography>
      <Slider max={15} value={10} />
    </div>
  );
}
