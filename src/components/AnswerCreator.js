import { Typography, Stack, Button, Box } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import LabelHeader from "./LabelHeader";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

function AnswerCreator(props) {
  return (
    <Stack sx={{ width: "100%", gap: "16px" }}>
      <LabelHeader header="Auswahlmöglichkeiten" />
      {props.exercise.answers.map((answer, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            border: "1px solid #245FA7",
            height: "60px",
            borderRadius: "8px",
            gap: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DragHandleIcon
            fontSize="medium"
            sx={{
              color: "#003063",
              marginLeft: "8px",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontStyle: " normal",
              fontWeight: "400",
              lineHeight: "28px",
              textAlign: "left",
              color: "#003063",
              flex: "4",
            }}
          >
            {answer}
          </Typography>
        </Box>
      ))}
      <Button>+ Neue Zeile hinzufügen</Button>
    </Stack>
  );
}

export default AnswerCreator;
