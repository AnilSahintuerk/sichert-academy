import { Typography, Box, Stack, Paper } from "@mui/material";
import LabelHeader from "./LabelHeader";

const LABELS = [
  {
    lecture: "Datenanalyse",
    questions: ["Frage1", "Frage2", "Frage3"],
  },
  {
    lecture: "Prozessmodellierung",
    questions: ["Frage1", "Frage2"],
  },
];

function QuestionElements(props) {
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
      <LabelHeader header={Label.lecture} />
      {Label.questions.map((question, index) => (
        <Paper
          elevation={3}
          key={index}
          sx={{
            height: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#003063",
            fontSize: "16px",
            fontWeight: "500",
            "&:hover": {
              background: "#7AACF9",
              color: "#fff",
            },
          }}
        >
          {question}
        </Paper>
      ))}
    </Stack>
  ));
}

export default QuestionElements;
