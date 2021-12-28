import {
  Typography,
  Tooltip,
  LinearProgress,
  Popover,
  Button,
  Box,
  Stack,
  Divider,
  Container,
  Avatar,
  TextField,
  InputBase,
  Paper,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Checkbox,
  FormGroup,
  AvatarGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  CardActionArea,
  Slider,
  Radio,
  PrettoSlider,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import VideoCardDrag from "./VideoCardDrag";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelHeader from "./LabelHeader";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GoBack from "./GoBack";
import AnswerCreator from "./AnswerCreator";
import { lineHeight } from "@mui/system";
import AnswerPreview from "./AnswerPreview";

const DATA = [
  {
    id: "0",
    teacher: "Dieter Müller",
    src: "logo192.png",
    title: "Kurs 1",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "06:05",
  },
  {
    id: "1",
    teacher: "Tina Schmidt",
    src: "3.png",
    title: "Kurs 2",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "2",
    teacher: "Martina Müller",
    src: "2.JPEG",
    title: "Kurs 3",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "3",
    teacher: "Dieter Müller",
    src: "logo192.png",
    title: "Kurs 1",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "06:05",
  },
  {
    id: "14",
    teacher: "Tina Schmidt",
    src: "3.png",
    title: "Kurs 2",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "5",
    teacher: "Martina Müller",
    src: "2.JPEG",
    title: "Kurs 3",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
];

const DUMMY_ANSWERS = ["Ja", "Nein", "Vielleicht"];

function Preview(props) {
  return (
    <Box
      maxWidth="100%"
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        className="container1"
        maxWidth="25%"
        sx={{
          height: "100vh",
          width: "25vw",
          overflowY: "scroll",
          position: "relative",
          paddingBottom: "64px",
        }}
      >
        <GoBack />
        <Stack alignItems="center" sx={{ gap: "64px", marginTop: "48px" }}>
          <TextField
            required
            id="question"
            label="Frage"
            sx={{
              width: "100%",
              color: "#003063",
            }}
          />
          <TextField
            multiline
            rows={4}
            id="description"
            label="Weitere Beschreibung"
            sx={{
              width: "100%",
              color: "#003063",
            }}
          />
          <AnswerCreator />
        </Stack>
      </Container>
      <Container
        maxWidth="75%"
        sx={{
          height: "100vh",
          width: "75vw",
          background: "#2F3033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnswerPreview question={props.frage} />
      </Container>
    </Box>
  );
}

export default Preview;
