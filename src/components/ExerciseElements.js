import { Typography, Box, Stack, Paper } from "@mui/material";

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

function ExerciseElements(props) {
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
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          overflow: "hidden",
          gap: "8px",
          color: "#563E5D",
        }}
      >
        <Typography sx={{ display: "flex" }}>{Label.header}</Typography>
        <Box
          sx={{
            height: "1px",
            background: "#563E5D",
            flex: "1",
          }}
        ></Box>
      </Stack>
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
