import { Box, Stack, Divider, Typography } from "@mui/material";
import { useState } from "react";
import VideoCardDrag from "./VideoCardDrag";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import lecturesData from "../data/LecturesData";

function VideoCardsDragAndDrop(props) {
  const [allCards, updateAllCards] = useState(lecturesData);
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

        // selectedCardsArray.push(selectedItem);
        const [slectedItem] = selectedCardsArray.splice(result.source.index, 0);
        selectedCardsArray.splice(result.destination.index, 0, selectedItem);

        updateAllCards(newAllCardsArray);
        updateSelectedCards(selectedCardsArray);
      } else {
        const allCardsArray = Array.from(allCards);
        const selectedCardsArray = Array.from(selectedCards);
        const selectedItem = selectedCardsArray.find(
          (x) => x.id === result.draggableId
        );

        const newSelectedCardsArray = selectedCardsArray.filter(
          (x) => x !== selectedItem
        );

        const [slectedItem] = allCardsArray.splice(result.source.index, 0);
        allCardsArray.splice(result.destination.index, 0, selectedItem);
        updateAllCards(allCardsArray);
        updateSelectedCards(newSelectedCardsArray);
      }
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "25px",
        justifyContent: "center",
      }}
    >
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
                sx={{
                  minHeight: "500px",
                  minWidth: "500px",
                  maxHeight: "100vh",
                  overflowY: "scroll",
                }}
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
                        {console.log(x)}
                        <VideoCardDrag lecture={x} />
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
        <Stack sx={{ gap: "28px", alignItems: "center" }}>
          <Typography variant="h4" sx={{ color: "#563E5D" }}>
            Lehrplan
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              minWidth: "500px",

              maxHeight: "100vh",
              overflow: "scroll",
              gap: "32px",
            }}
          >
            <Droppable droppableId="selection">
              {(provided) => (
                <Stack
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{
                    minHeight: "100%",
                    minWidth: "100%",
                  }}
                >
                  {selectedCards.map((lecture, index) => (
                    <Draggable
                      key={lecture.id}
                      draggableId={lecture.id}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          sx={{ margin: "8px 0px" }}
                        >
                          <VideoCardDrag lecture={lecture} />
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Stack>
              )}
            </Droppable>
          </Box>
        </Stack>
      </DragDropContext>
    </Box>
  );
}

export default VideoCardsDragAndDrop;
