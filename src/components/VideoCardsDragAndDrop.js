import { Box, Stack, Divider, Typography } from "@mui/material";
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
    src: "3.jpeg",
    title: "Kurs 2",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "2",
    teacher: "Martina Müller",
    src: "2.png",
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
    cardsIds: [0, 1, 2],
  },
  {
    id: "0",
    title: "SELECTION",
    cardsIds: [],
  },
];

function Preview() {
  const [allCards, updateAllCards] = useState(DATA);
  const [selectedCards, updateSelectedCards] = useState([]);

  function handleOnDragEnd(result) {
    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === "start") {
        const items = Array.from(allCards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateAllCards(items);
      } else {
        const items = Array.from(selectedCards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateSelectedCards(items);
      }
    } else {
      if (result.source.droppableId === "start") {
        const allCardsArray = Array.from(allCards);
        const selectedCardsArray = Array.from(selectedCards);
        const selectedItem = allCardsArray.find(
          (x) => x.id === result.draggableId
        );

        const newAllCardsArray = allCardsArray.filter(
          (x) => x !== selectedItem
        );

        selectedCardsArray.push(selectedItem);

        updateAllCards(newAllCardsArray);
      } else {
        const allCardsArray = Array.from(allCards);
        const selectedCardsArray = Array.from(selectedCards);
        const selectedItem = selectedCardsArray.find(
          (x) => x.id === result.draggableId
        );

        const newSelectedCardsArray = selectedCardsArray.filter(
          (x) => x !== selectedItem
        );

        allCardsArray.push(selectedItem);

        updateAllCards(allCardsArray);
        updateSelectedCards(newSelectedCardsArray);
      }
    }
  }

  return (
    <Box sx={{ display: "flex", gap: "25px" }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#563E5D" }}>
            Alle Kurse
          </Typography>
          <Droppable droppableId="start">
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ minHeight: "500px", minWidth: "500px" }}
              >
                {allCards.map((x, index) => (
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
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#563E5D" }}>
            Lehrplan
          </Typography>
          <Droppable droppableId="selection">
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{
                  minHeight: "500px",
                  minWidth: "500px",
                }}
              >
                {selectedCards.map((x, index) => (
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
        </Box>
      </DragDropContext>
    </Box>
  );
}

export default Preview;
