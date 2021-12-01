import { Card } from "@mui/material";

export default function Task({ description, index, rowNum }) {
  return (
    <Card>
      <p>{description}</p>
    </Card>
  );
}
