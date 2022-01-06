import { TextField } from "@mui/material";
import { Typography, Box, Stack, Slide, Container } from "@mui/material";
import Note from "./Note";
/* 
A Notblock Contains multiple Notes

Noteblock - Object
    - id
    - Notes - [Note]:
        - index
        - content
        - timestamp

})
 */

const Data = {
  id: "1",
  notes: [
    { index: 0, content: "test 1", timestamp: "00:32" },
    { index: 1, content: "test 2", timestamp: "01:59" },
    { index: 2, content: "test 3", timestamp: "02:39" },
    { index: 3, content: "test 5", timestamp: "02:59" },
  ],
};

function HideOnScroll(props) {
  const { children, window } = props;

  return (
    <Slide appear={false} direction="down">
      {children}
    </Slide>
  );
}

function NoteBlock(props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "30%",
        height: "100%",
        zIndex: "10",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="notesBox"
        sx={{
          background: "#003063",
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "400", color: "#fff" }}>
          Notizen
        </Typography>
      </Box>
      <Stack
        sx={{
          flexDirection: "column",
          overflowY: "scroll",
          height: "100%",
        }}
      >
        <Box
          sx={{
            background: "#E3E2E6",
            minWidth: "20%",
            height: "150%",
            position: "absolute",
            top: "60px",
            left: "0",
            width: "20%",
            zIndex: "-1",
          }}
        ></Box>
        {/* Data := props */}
        {Data.notes.map((note) => (
          <Note
            content={note.content}
            index={note.index}
            timestamp={note.timestamp}
            skipToTimestamp={props.skipToTimestamp}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default NoteBlock;
