import { Grid } from "@mui/material";
import Task from "./Task.js";

export default function TaskRow({ rowData, rowNum }) {
  let tasks = rowData.tasks.map((task, ind) => (
    <Task
      key={task.id}
      description={task.description}
      index={ind}
      rowNum={rowNum}
    />
  ));

  return (
    <Grid xs={4}>
      {rowData.name} {tasks}
    </Grid>
  );
}
