import { Typography, Box, Stack, Paper } from "@mui/material";

function ExerciseElements(props) {
  return (
    <Stack
      sx={{
        width: "270px",
        height: "auto",
        gap: "16px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          overflow: "hidden",
          gap: "8px",
          color: "#563E5D",
        }}
      >
        <Typography sx={{ display: "flex" }}>{props.data.header}</Typography>
        <Box
          sx={{
            height: "1px",
            background: "#563E5D",
            flex: "1",
          }}
        ></Box>
      </Stack>
      {props.data.tasks.map((task, index) => (
        <Paper
          elevation={3}
          sx={{
            height: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#00468B",
            fontSize: "16px",
            fontWeight: "400",
            "&:hover": {
              background: "#7AACF9",
              color: "#fff",
            },
          }}
        >
          {task}
        </Paper>
      ))}
    </Stack>
  );
}

export default ExerciseElements;
