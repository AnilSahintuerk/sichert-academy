import { Stack, Paper } from "@mui/material";
import LabelHeader from "./LabelHeader";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return LABELS.map((Label, index) => (
    <Stack
      key={index}
      sx={{
        width: "auto",
        height: "auto",
        gap: "16px",
        marginBottom: "32px",
      }}
    >
      <LabelHeader header={Label.header} />
      {Label.elements.map((element, index) =>
        element === "Mehrfachauswahl" ? (
          <Paper
            elevation={3}
            key={index}
            onClick={() => navigate("/mc")}
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
        ) : (
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
        )
      )}
    </Stack>
  ));
}

export default ExerciseElements;
