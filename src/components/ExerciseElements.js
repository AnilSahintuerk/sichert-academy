import { Stack, Paper } from "@mui/material";
import LabelHeader from "./LabelHeader";

const LABELS = [
  {
    header: "Aufgaben",
    elements: ["Mehrfachauswahl", "Lückentext", "Fallbeispiel"],
  },
  {
    header: "Statische Elemente",
    elements: ["Bilder", "Video", "Text"],
  },
];

function ExerciseElements() {
  return LABELS.map((Label, index) => (
    <Stack
      key={index}
      sx={{
        width: "270px",
        height: "auto",
        gap: "16px",
        marginBottom: "32px",
      }}
    >
      <LabelHeader header={Label.header} />
      {Label.elements.map((element, index) => (
        <Paper
          elevation={3}
          key={index}
          sx={{
            height: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#00468B",
            fontSize: "16px",
            fontWeight: "400",
            "&:hover": {
              background: "#7AACF9",
              color: "#fff",
            },
          }}
        >
          {element}
        </Paper>
      ))}
    </Stack>
  ));
}

export default ExerciseElements;
