import { Card } from "@mui/material";
import { useDrag } from "react-dnd";
import "../styles.css";

export default function Task({ description, index, rowNum }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { description: description, index: index, rowNum: rowNum }
    }),
    []
  );

  return (
    <Card
      className="muiCard"
      ref={drag}
      style={{
        boxShadow:
          "rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px"
      }}
    >
      <p>{description}</p>
    </Card>
  );
}
