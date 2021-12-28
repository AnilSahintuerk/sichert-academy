import { Typography, Box } from "@mui/material";

/*

Task - Object
    - id
    - name
    - type
    - description
    - taskType (Mehrfachauswahl, LückenText, Fallbeispiel)

Mehrfachauswahl - Object 
    - options - ['string']
    - correctAnswerIndex [int]


*/

function Task(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        border: "1px solid #003063",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#003063", fontWeight: "500", fontSize: "24px" }}
      >
        {props.task.name}
      </Typography>
    </Box>
  );
}

export default Task;
