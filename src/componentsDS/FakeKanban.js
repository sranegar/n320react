import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { TaskStore } from "../system/TaskStore.js";
import TaskRow from "./TaskRow";
import AddTask from "./AddTask";

export default function FakeKanban() {
  const [rowData, setRowData] = useState(TaskStore.rows);

  //pre-render
  let rows = rowData.map((row, ind) => (
    <TaskRow key={ind} rowData={row} rowNum={ind} />
  ));

  return (
    <Container>
      <Grid container>{rows}</Grid>
      <AddTask />
    </Container>
  );
}
