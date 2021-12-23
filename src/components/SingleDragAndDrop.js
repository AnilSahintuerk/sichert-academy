import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Typography,
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
} from "@mui/material";
import { useState } from "react";
import VideoCardDrag from "./VideoCardDrag";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
];

const COLUMNS = [
  {
    id: "0",
    title: "ALL",
    cardsID,
  },
  {
    id: "0",
    title: "SELECTION",
  },
];

function Preview() {
  const [cards, updateCards] = useState(DATA);

  function handleOnDragEnd(result) {
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCards(items);
  }

  return (
    <Box sx={{ display: "flex", gap: "25px" }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <Stack {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((x, index) => (
                <Draggable key={x.id} draggableId={x.id} index={index}>
                  {(provided) => (
                    <Box
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      sx={{ margin: "8px 0px" }}
                    >
                      <VideoCardDrag
                        src={x.src}
                        id={x.id}
                        title={x.title}
                        body={x.body}
                        tag={x.tag}
                        time={x.time}
                        teacher={x.teacher}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}

export default Preview;
