import { Typography, Box, Stack } from "@mui/material";
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

function NoteBlock(props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "30%",
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
        }}
      >
        <Box
          sx={{
            background: "#E3E2E6",
            minWidth: "20%",
            height: "100%",
            position: "absolute",
            top: "60px",
            left: "0",
            width: "20%",
            height: "89%",
            zIndex: "-1",
          }}
        ></Box>

        {props.noteblockData.notes.map((x) => (
          <Note content={x.content} index={x.index} timestamp={x.timestamp} />
        ))}
      </Stack>
    </Box>
  );
}

export default NoteBlock;
