import { Typography, Box, Stack, Paper } from "@mui/material";
import LabelHeader from "./LabelHeader";
import lecturesData from "../data/LecturesData";
import { useState } from "react";

const LABELS = [
  {
    lecture: lecturesData[1].title,
    questions: [
      "Warum ist das nützlich?",
      "Wieso geht der Drucker immer kaputt?",
      "Wie komme ich an neue Patronen ran?",
    ],
  },
  {
    lecture: lecturesData[0].title,
    questions: [
      "Was ist eine lineare regression?",
      "Wie kann ich die Daten strategisch nutzen?",
    ],
  },
];

function QuestionElements(props) {
  const activeHandler = (question, index) => {
    props.setActive([question, index]);
  };

  return LABELS.map((Label, index) => (
    <Stack
      key={index}
      sx={{
        width: "100%",
        height: "auto",
        gap: "16px",
      }}
    >
      <LabelHeader header={Label.lecture} />
      {Label.questions.map((question, index) =>
        index === props.active[1] && question == props.active[0] ? (
          <Paper
            elevation={3}
            onClick={() => activeHandler(question, index)}
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
              background: "#7AACF9",
              color: "#fff",
              "&:hover": {
                background: "#7AACF9",
                color: "#fff",
              },
            }}
          >
            {question}
          </Paper>
        ) : (
          <Paper
            elevation={3}
            onClick={() => activeHandler(question, index)}
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
        )
      )}
    </Stack>
  ));
}

export default QuestionElements;
