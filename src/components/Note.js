import { Typography, Box, Stack } from "@mui/material";

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

const NOTEBLOCK_DATA = [
  {
    id: "0",
    notes: {
      index: "0",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      timestamp: "00:32",
    },
  },
  {
    id: "1",
    notes: {
      index: "1",
      content: "Lorem ipsum dolor sit ",
      timestamp: "01:12",
    },
  },
];

function Note(props) {
  return (
    <Stack direction="row" sx={{ width: "100%", flex: "1 0 auto" }}>
      <Box
        sx={{
          minWidth: "20%",
          height: "auto",
          flex: "1",
        }}
      >
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            color: "#3E2845",
            background: "#D4E3FF",
            padding: "8px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.timestamp}
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "80%",
          height: "auto",
          flex: "4",
          padding: "8px 8px",
          fontSize: "14px",
          fontWeight: "400",
          color: "#003063",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {props.content}
      </Box>
    </Stack>
  );
}

export default Note;
